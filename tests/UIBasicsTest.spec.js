const { test } = require("@playwright/test");

test("create page via browser.newContext and open login page", async ({
  browser,
}) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://www.rahulshettyacademy.com/loginpagePractise/");
//   const title = await page.title();
//   console.log(title);
});

test("use fixture page to open Google", async ({ page }) => {
  await page.goto("https://www.google.com/");
  // get title and assert
//   const title = await page.title();
//   console.log(title);
//   expect(page).toHaveTitle("Google");
});
