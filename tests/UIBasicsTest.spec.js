const { test, expect } = require("@playwright/test");

test("create page via browser.newContext and open Client App", async ({
  browser,
}) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://www.rahulshettyacademy.com/client", {
    waitUntil: "domcontentloaded",
  });
  const title = await page.title();
  console.log(title);

  await page.locator("input#userEmail").fill("gonzaless424@gmail.com");
  await page.locator("input#userPassword").fill("Automation@2026");
  await page.locator("#login").click();

  await page.locator(".card-body b").last().waitFor();
  const products = await page.locator(".card-body b").allTextContents();

  console.log(products);

  // await page.pause();
});

test("create page via browser.newContext and open loginpagePractise", async ({
  browser,
}) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://www.rahulshettyacademy.com/loginpagePractise/");
  const title = await page.title();
  console.log(title);
  // css,xpath
  const username = page.locator("input#username");
  const password = page.locator("input#password");
  const signInBtn = page.locator("#signInBtn");

  await username.fill("admin");
  await password.fill("password");

  signInBtn.click();
  // wait untl this locator is visible, but in playwright no need to write,
  // it will automatically wait for the element to be visible before performing any action on it.
  const errorMessageLocator = await page.locator("[style*='block']");
  const errorMessage = await errorMessageLocator.textContent();
  console.log(errorMessage);
  await expect(errorMessageLocator).toContainText(errorMessage);

  await username.fill("");
  await username.fill("rahulshettyacademy");
  await password.fill("");
  await password.fill("Learning@830$3mK2");
  await signInBtn.click();

  const cardTitles = page.locator(".card-body a");
  // get the text of the first link in the card body and print it
  console.log(await cardTitles.first().textContent());
  // get the text of the second link in the card body and print it
  console.log(await cardTitles.nth(1).textContent());
  const allTitles = await cardTitles.allTextContents();
  console.log(allTitles);

  // assertions
  await expect(cardTitles.first()).toContainText("iphone");
  await expect(cardTitles.nth(1)).toContainText("Samsung");

  // await page.pause()
});



test("use fixture page to open Google", async ({ page }) => {
  await page.goto("https://www.google.com/");
  // get title and assert
  const title = await page.title();
  console.log(title);
  expect(page).toHaveTitle("Google");
});


test.only("Open loginpagePractise and test UI Controls", async ({
  browser,
}) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://www.rahulshettyacademy.com/loginpagePractise/");
  const title = await page.title();
  console.log(title);
  // css,xpath
  const username = page.locator("input#username");
  const password = page.locator("input#password");
  const signInBtn = page.locator("#signInBtn");


  await username.fill("rahulshettyacademy");
  await password.fill("Learning@830$3mK2");
  await signInBtn.click();

  const dropdown = page.locator("select.form-control");
  await dropdown.selectOption("consult");

  await page.locator(".radiotextsty").last().click();
  await page.locator("#okayBtn").click();

  
  console.log(await page.locator(".radiotextsty").last().isChecked());
  await expect(page.locator(".radiotextsty").last()).toBeChecked();

  await page.pause()
});