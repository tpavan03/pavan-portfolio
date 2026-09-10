import { test, expect } from "@playwright/test";

test("the dark-only homepage renders cleanly without image or local-only links", async ({
  page,
}) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto("/");

  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
  await expect(page.locator("html")).toHaveCSS("color-scheme", "dark");
  await expect(
    page.getByRole("heading", { level: 1, name: /Intelligence with intent/i }),
  ).toBeVisible();
  await expect(page.getByRole("button", { name: /mode|theme/i })).toHaveCount(
    0,
  );
  await expect(page.locator("img, picture, video, canvas")).toHaveCount(0);
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
});

test("command dialog supports shortcuts, search, arrow navigation, and Escape", async ({
  page,
}) => {
  await page.goto("/");
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
  await expect(page.locator(".project")).toHaveCount(8);
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

test("health, resume, and all page routes are available without image markup", async ({
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
    expect(
      html,
      `${route} should not render raster image elements`,
    ).not.toMatch(/<(?:img|picture)\b/i);
    expect(html, `${route} should not contain localhost links`).not.toMatch(
      /href=["'][^"']*(?:localhost|127\.0\.0\.1)/i,
    );
  }
});
