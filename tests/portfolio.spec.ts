import { test, expect } from "@playwright/test";

test("the coastal day moves through eleven phases and reverses with native scrolling", async ({
  page,
}) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto("/");
  const header = page.locator(".site-header");
  await expect(header).toHaveAttribute("data-navigation-ready", "true");
  await expect(
    page.getByRole("heading", { level: 1, name: /Hey.*Pavan/i }),
  ).toBeVisible();
  await expect(
    page.getByRole("img", { name: "Pavan", exact: true }),
  ).toBeVisible();
  await expect(
    page.getByRole("button", { name: "Toggle light and dark theme" }),
  ).toHaveCount(0);
  await expect(page.locator(".portrait-sticker")).toHaveCount(0);
  expect((await header.boundingBox())!.width).toBeLessThanOrEqual(860);
  const world = page.locator("#day-world");
  await expect(world).toHaveAttribute("aria-hidden", "true");
  await expect(world).toHaveCSS("pointer-events", "none");
  await expect(world).toHaveAttribute("data-active-phase", "firstlight");
  const phases = [
    "firstlight",
    "sunrise",
    "morning",
    "noon",
    "rain",
    "clearing",
    "goldenhour",
    "sunset",
    "bluehour",
    "night",
    "midnight",
  ];
  for (const phase of [...phases, "sunrise", "rain", "firstlight"]) {
    const section = page.locator(`[data-day-phase="${phase}"]`);
    await expect(section).toHaveCount(1);
    await section.evaluate((node) =>
      node.scrollIntoView({ behavior: "instant", block: "start" }),
    );
    await expect(world).toHaveAttribute("data-active-phase", phase);
    await expect(header).toHaveAttribute(
      "data-theme",
      (await section.getAttribute("data-theme"))!,
    );
    await expect(header).toHaveAttribute(
      "data-palette",
      (await section.getAttribute("data-palette-zone"))!,
    );
  }
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.evaluate(() =>
    scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "instant",
    }),
  );
  await expect(world).toHaveAttribute("data-active-phase", "midnight");
  await expect(header).toHaveAttribute("data-theme", "dark");
  await page.keyboard.press("Control+k");
  const dialog = page.getByRole("dialog", { name: "GO SOMEWHERE INTERESTING" });
  await expect(dialog).toBeVisible();
  await expect(dialog).toHaveAttribute("data-theme", "dark");
  await page.keyboard.press("Escape");
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page
    .locator("#focus")
    .evaluate((node) =>
      node.scrollIntoView({ behavior: "instant", block: "start" }),
    );
  await expect(world).toHaveAttribute("data-active-phase", "night");
  await expect(header).toHaveAttribute("data-theme", "dark");
  await expect(
    page.locator('a[href*="localhost"], a[href*="127.0.0.1"]'),
  ).toHaveCount(0);
  expect(errors).toEqual([]);
});

test("mobile navigation opens, closes with Escape, and follows section links", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");

  const menu = page.locator('button[aria-controls="navigation-links"]');
  await menu.click();
  await expect(menu).toHaveAttribute("aria-expanded", "true");
  await expect(page.locator("#navigation-links")).toHaveClass(/is-open/);
  await page.keyboard.press("Escape");
  await expect(menu).toHaveAttribute("aria-expanded", "false");

  await menu.click();
  await page.locator('#navigation-links a[href="/#work"]').click();
  await expect(page).toHaveURL(/\/#work$/);
  await expect(menu).toHaveAttribute("aria-expanded", "false");
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
  ).toBe(true);

  await page.setViewportSize({ width: 320, height: 720 });
  await page.reload();
  await page.evaluate(() => document.fonts.ready);
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
  ).toBe(true);
  await expect(
    page.getByRole("heading", { name: /Let’s talk about it/i }),
  ).toHaveCount(1);
});

test("the coastal scenery tracks the sun, a passing shower, and the midnight ocean", async ({
  page,
}) => {
  await page.goto("/#about");
  const world = page.locator("#day-world");
  const enter = async (phase: string) => {
    await page
      .locator(`[data-day-phase="${phase}"]`)
      .evaluate((node) =>
        node.scrollIntoView({ behavior: "instant", block: "start" }),
      );
    await expect(world).toHaveAttribute("data-active-phase", phase);
  };
  await expect(world).toHaveAttribute("data-active-phase", "sunrise");
  await expect(world).toHaveAttribute("data-ocean", "shore");
  const sun = world.locator(".world-sun");
  const sunriseY = (await sun.boundingBox())!.y;
  await enter("noon");
  await expect
    .poll(async () => (await sun.boundingBox())!.y)
    .toBeLessThan(sunriseY);
  await enter("rain");
  await expect(world).toHaveAttribute("data-rain", "true");
  await expect
    .poll(() =>
      world
        .locator(".world-rain")
        .evaluate((node) => Number(getComputedStyle(node).opacity)),
    )
    .toBeGreaterThan(0.1);
  await enter("clearing");
  await expect(world).toHaveAttribute("data-rain", "false");
  await expect(world.locator(".world-rain")).toHaveCSS("opacity", "0");
  await enter("midnight");
  await expect(world).toHaveAttribute("data-moon", "true");
  await expect(world).toHaveAttribute("data-ocean", "deep");
  await expect
    .poll(() =>
      world
        .locator(".world-moon")
        .evaluate((node) => Number(getComputedStyle(node).opacity)),
    )
    .toBeGreaterThan(0.5);
  await page.emulateMedia({ reducedMotion: "reduce" });
  await expect(world).toHaveAttribute("data-reduced-motion", "true");
  await expect
    .poll(() =>
      page.evaluate(
        () =>
          document.getAnimations().filter((animation) => {
            const target = (animation.effect as KeyframeEffect | null)?.target;
            return (
              target instanceof Element &&
              target.closest("#day-world") &&
              animation.playState === "running"
            );
          }).length,
      ),
    )
    .toBe(0);
  await enter("rain");
  await expect(world).toHaveAttribute("data-reduced-motion", "true");
  await expect(world.locator(".world-rain i").first()).toHaveCSS(
    "animation-name",
    "none",
  );
  await page.goto("/projects");
  await expect(world).toHaveCount(0);
  await expect(page.locator(".site-header")).toHaveAttribute(
    "data-theme",
    "light",
  );
  await page.getByRole("link", { name: "Pavan home" }).click();
  await expect(world).toHaveCount(1);
  await expect(world).toHaveAttribute("data-active-phase", "firstlight");
});

test("chapter gateways add depth without blocking navigation or reduced-motion reading", async ({
  page,
}) => {
  await page.goto("/");
  const gateway = page.locator(".world-gateway");
  await expect(page.locator("#day-world")).toHaveAttribute(
    "data-active-phase",
    "firstlight",
  );
  await expect(gateway).toHaveAttribute("aria-hidden", "true");
  await expect(gateway).toHaveCSS("pointer-events", "none");
  const initialTransform = await gateway.evaluate(
    (node) => getComputedStyle(node).transform,
  );
  await page.locator("#about").evaluate((node) =>
    scrollTo({
      top: node.getBoundingClientRect().top + scrollY - innerHeight * 0.58,
      behavior: "instant",
    }),
  );
  await expect
    .poll(() =>
      gateway.evaluate((node) => Number(getComputedStyle(node).opacity)),
    )
    .toBeGreaterThan(0.5);
  await expect(gateway).not.toHaveCSS("transform", initialTransform);
  await page.getByRole("button", { name: "Open command menu" }).click();
  await expect(
    page.getByRole("dialog", { name: "GO SOMEWHERE INTERESTING" }),
  ).toBeVisible();
  await page.keyboard.press("Escape");
  await page.emulateMedia({ reducedMotion: "reduce" });
  await expect(gateway).toHaveCSS("display", "none");
  await expect(page.locator("#about > .chapter-depth")).toHaveCSS(
    "transform",
    "none",
  );
});

test("the portrait card and actual product screenshot choices work with the keyboard", async ({
  page,
}) => {
  await page.goto("/");
  await expect(page.locator(".site-header")).toHaveAttribute(
    "data-navigation-ready",
    "true",
  );
  const portrait = page.locator("button.portrait-object");
  await expect(portrait).toHaveAccessibleName("Turn Pavan’s portrait card");
  await portrait.focus();
  await portrait.press("Enter");
  await expect(portrait).toHaveAttribute("aria-pressed", "true");
  await expect(portrait).toHaveAccessibleName("Show Pavan’s portrait");
  await expect(portrait).toContainText("Hi again.");
  await expect(
    page.getByRole("img", { name: "Pavan", exact: true }),
  ).toBeHidden();
  await portrait.press("Space");
  await expect(portrait).toHaveAttribute("aria-pressed", "false");
  await expect(
    page.getByRole("img", { name: "Pavan", exact: true }),
  ).toBeVisible();

  for (const [id, initial, next] of [
    ["exam", "Study desk", "Welcome"],
    ["saapadu", "Daily overview", "Fasting"],
  ]) {
    const story = page.locator(`.product-story-${id}`);
    const before = await story.locator("img").getAttribute("src");
    await expect(
      story.getByRole("button", { name: initial, exact: true }),
    ).toHaveAttribute("aria-pressed", "true");
    const choice = story.getByRole("button", { name: next, exact: true });
    await choice.focus();
    await choice.press("Enter");
    await expect(choice).toHaveAttribute("aria-pressed", "true");
    await expect(
      story.getByRole("button", { name: initial, exact: true }),
    ).toHaveAttribute("aria-pressed", "false");
    await expect(story.locator("img")).not.toHaveAttribute("src", before!);
    await expect(
      story.getByRole("img", {
        name: new RegExp(`— ${next}, actual product screenshot`),
      }),
    ).toBeVisible();
  }
  await expect(
    page.getByRole("link", { name: "Open Pavan’s résumé PDF" }),
  ).toHaveAttribute("href", "/resume.pdf");
});

test("the engineering scene follows scroll progress and remains readable with reduced motion", async ({
  page,
}) => {
  await page.goto("/");
  const scene = page.locator("#approach");
  const first = page.locator(".passage-first");
  const second = page.locator(".passage-second");
  await scene.evaluate((node) =>
    scrollTo({
      top: node.getBoundingClientRect().top + scrollY,
      behavior: "instant",
    }),
  );
  await expect(first).toHaveCSS("opacity", "1");
  await expect(second).toHaveCSS("opacity", "0");
  await expect(second.getByRole("link")).toHaveAttribute("tabindex", "-1");
  await scene.evaluate((node) =>
    scrollTo({
      top:
        node.getBoundingClientRect().top +
        scrollY +
        (node.getBoundingClientRect().height - innerHeight) * 0.8,
      behavior: "instant",
    }),
  );
  await expect(first).toHaveCSS("opacity", "0");
  await expect(second).toHaveCSS("opacity", "1");
  await expect(second.getByRole("link")).toHaveAttribute("tabindex", "0");
  await page.emulateMedia({ reducedMotion: "reduce" });
  await expect(first).toHaveCSS("opacity", "1");
  await expect(second).toHaveCSS("opacity", "1");
  await expect(second.getByRole("link")).toHaveAttribute("tabindex", "0");
  await expect(scene.locator(".passage-sticky")).not.toHaveCSS(
    "position",
    "sticky",
  );
  const firstBox = (await first.boundingBox())!;
  const secondBox = (await second.boundingBox())!;
  expect(secondBox.y).toBeGreaterThanOrEqual(firstBox.y + firstBox.height);
});

test("command dialog supports shortcuts, search, arrow navigation, and Escape", async ({
  page,
}) => {
  await page.goto("/");
  await expect(page.locator(".site-header")).toHaveAttribute(
    "data-navigation-ready",
    "true",
  );
  await page.keyboard.press("Control+k");

  const dialog = page.getByRole("dialog", { name: "GO SOMEWHERE INTERESTING" });
  const search = dialog.getByRole("textbox", {
    name: "Search navigation and projects",
  });
  await expect(dialog).toBeVisible();
  await expect(search).toBeFocused();

  await search.fill("PhishScope");
  await expect(dialog.getByRole("link", { name: /PhishBuster/ })).toHaveCount(
    1,
  );
  await expect(dialog.locator(".command-results a")).toHaveCount(1);
  await search.press("ArrowDown");
  await expect(dialog.getByRole("link", { name: /PhishBuster/ })).toBeFocused();

  await page.keyboard.press("Escape");
  await expect(dialog).not.toBeVisible();
  await page.keyboard.press("Meta+k");
  await expect(dialog).toBeVisible();
  await expect(search).toHaveValue("");
  await page.keyboard.press("Meta+k");
  await expect(dialog).not.toBeVisible();
});

test("project search, filters, disclosures, and deep links stay in the URL", async ({
  page,
}) => {
  await page.goto(
    "/projects?q=Phish&category=AI%20%26%20security&project=PhishBuster%20%2F%20PhishScope",
  );

  const project = page.locator(".project").filter({
    has: page.getByRole("heading", { name: "PhishBuster / PhishScope" }),
  });
  await expect(
    page.getByRole("textbox", { name: "Search projects" }),
  ).toHaveValue("Phish");
  await expect(
    page.getByRole("button", { name: "AI & security", exact: true }),
  ).toHaveAttribute("aria-pressed", "true");
  await expect(page.locator(".project")).toHaveCount(1);
  await expect(project.locator("details")).toHaveAttribute("open", "");

  await project.locator("summary").click();
  await expect(project.locator("details")).not.toHaveAttribute("open", "");
  await expect
    .poll(() => new URL(page.url()).searchParams.get("project"))
    .toBeNull();

  const search = page.getByRole("textbox", { name: "Search projects" });
  await search.fill("no-such-project");
  await expect(
    page.getByRole("heading", { name: "No matches. A different angle?" }),
  ).toBeVisible();
  await page.getByRole("button", { name: "Clear filters ↗" }).click();
  await expect(page.locator(".project")).toHaveCount(10);
  await expect(page).toHaveURL(/\/projects$/);

  await page
    .getByRole("button", { name: "Systems & research", exact: true })
    .click();
  await expect(page.locator(".project")).toHaveCount(2);
  expect(new URL(page.url()).searchParams.get("category")).toBe(
    "Systems & research",
  );
});

test("expertise and experience selectors expose their selected content", async ({
  page,
}) => {
  await page.goto("/");

  const agentic = page.getByRole("tab", { name: /Agentic AI/ });
  await agentic.focus();
  await agentic.press("ArrowRight");
  const secure = page.getByRole("tab", { name: /Secure systems/ });
  await expect(secure).toBeFocused();
  await expect(secure).toHaveAttribute("aria-selected", "true");
  await expect(page.getByRole("tabpanel")).toContainText(
    "Identity → Policy → Runtime → Recovery",
  );
  await secure.press("End");
  await expect(page.getByRole("tab", { name: /Applied ML/ })).toHaveAttribute(
    "aria-selected",
    "true",
  );

  const netskope = page.getByRole("button", { name: /Netskope/ });
  await netskope.click();
  await expect(netskope).toHaveAttribute("aria-pressed", "true");
  await expect(page.locator(".journey-content")).toContainText(
    "AI Intern — Intrusion Prevention System",
  );
  await expect(page.locator(".journey-content")).toContainText(
    "4.25M IPS events",
  );
});

test("contact topics build the mail subject and copy the email address", async ({
  page,
  context,
}) => {
  const origin = new URL(process.env.TEST_BASE_URL || "http://127.0.0.1:3000")
    .origin;
  await context.grantPermissions(["clipboard-read", "clipboard-write"], {
    origin,
  });
  await page.goto("/#contact");

  await page.getByRole("button", { name: "Research", exact: true }).click();
  const conversation = page.getByRole("link", { name: /Start a conversation/ });
  expect(await conversation.getAttribute("href")).toBe(
    "mailto:thokalapavan.pp@gmail.com?subject=Research%20%E2%80%94%20Let's%20connect",
  );

  await page.getByRole("button", { name: "Copy email address" }).click();
  await expect(
    page.getByRole("status").filter({ hasText: "Email address copied" }),
  ).toBeVisible();
  await expect
    .poll(() => page.evaluate(() => navigator.clipboard.readText()))
    .toBe("thokalapavan.pp@gmail.com");
});

test("health, resume, and all page routes remain available", async ({
  request,
}) => {
  const health = await request.get("/api/health");
  expect(health.ok()).toBe(true);
  expect(await health.json()).toEqual({
    status: "ok",
    service: "pavan-portfolio",
  });

  const resume = await request.get("/resume.pdf");
  expect(resume.ok()).toBe(true);
  expect(resume.headers()["content-type"]).toContain("application/pdf");
  expect((await resume.body()).subarray(0, 4).toString()).toBe("%PDF");

  for (const route of ["/", "/projects", "/experience", "/publications"]) {
    const response = await request.get(route);
    expect(response.ok(), `${route} should respond successfully`).toBe(true);
    const html = await response.text();
    if (route === "/") expect(html).toContain("pavan-portrait.jpg");
    expect(html, `${route} should not contain localhost links`).not.toMatch(
      /href=["'][^"']*(?:localhost|127\.0\.0\.1)/i,
    );
  }
});
