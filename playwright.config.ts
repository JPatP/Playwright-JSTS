import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 60 * 1000,
  
  expect: {
    timeout: 5000,
  },
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [["html", { open: "always"}]],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    browserName: 'chromium',
    headless: false,
    trace: 'on-first-retry',
  }
});
