import { test, expect } from "@playwright/test";
test("desktop renders without client errors and filters project details", async ({
  page,
}) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "Engineered",
  );
  await expect(page.locator(".project")).toHaveCount(4);
  await page
    .getByRole("button", { name: "AI & security", exact: true })
    .click();
  await expect(page.locator(".project")).toHaveCount(2);
  await expect(page.locator(".project").first()).toContainText(
    "Phishing Detection",
  );
  await page.locator(".project summary").first().click();
  await expect(
    page.locator(".project").first().locator("details"),
  ).toHaveAttribute("open", "");
  await page.getByRole("button", { name: "All work", exact: true }).click();
  await expect(page.locator(".project")).toHaveCount(4);
  expect(errors).toEqual([]);
});
test("mobile navigation and layout fit the viewport", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await page.getByRole("button", { name: "Menu +", exact: true }).click();
  await page
    .locator("#navigation-links")
    .getByRole("link", { name: "Work", exact: true })
    .click();
  await expect(
    page.getByRole("button", { name: "Menu +", exact: true }),
  ).toHaveAttribute("aria-expanded", "false");
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
  ).toBe(true);
  await page
    .getByRole("button", { name: "Or leave a message ↗", exact: true })
    .click();
  await expect(
    page.getByRole("textbox", { name: "Your name", exact: true }),
  ).toBeVisible();
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
  ).toBe(true);
});
test("backend health, resume, and detail routes are available", async ({
  request,
}) => {
  const health = await request.get("/api/health");
  expect(health.ok()).toBe(true);
  expect((await health.json()).status).toBe("ok");
  const resume = await request.get("/resume.pdf");
  expect(resume.ok()).toBe(true);
  expect((await resume.body()).subarray(0, 4).toString()).toBe("%PDF");
  for (const route of ["/projects", "/experience", "/publications"])
    expect((await request.get(route)).ok()).toBe(true);
  const origin = new URL(process.env.TEST_BASE_URL || "http://127.0.0.1:3000")
    .origin;
  const invalid = await request.post("/api/contact", {
    headers: { origin },
    data: { name: "A", email: "invalid", message: "short" },
  });
  expect(invalid.status()).toBe(400);
  const foreign = await request.post("/api/contact", {
    headers: { origin: "https://example.com" },
    data: {},
  });
  expect(foreign.status()).toBe(403);
});
