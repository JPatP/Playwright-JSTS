const { test,expect } = require("@playwright/test");

test.only("create page via browser.newContext and open login page", async ({
  browser,
}) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://www.rahulshettyacademy.com/loginpagePractise/");
  const title = await page.title();
  console.log(title);
  // css,xpath
  await page.locator("input#username").fill("admin");
  await page.locator("input#password").fill("password");
  await page.locator("#signInBtn").click();
  // wait untl this locator is visible, but in playwright no need to write, 
  // it will automatically wait for the element to be visible before performing any action on it.
  const errorMessageLocator = await page.locator("[style*='block']")
  const errorMessage = await errorMessageLocator.textContent();
  console.log(errorMessage);
  await expect(errorMessageLocator).toContainText("Hahah");
});

test("use fixture page to open Google", async ({ page }) => {
  await page.goto("https://www.google.com/");
  // get title and assert
  const title = await page.title();
  console.log(title);
  expect(page).toHaveTitle("Google");

});
