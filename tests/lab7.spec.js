const { test, expect } = require('@playwright/test');

test('Verify welcome text on Herokuapp home page', async ({ page }) => {
  // 1. Navigate to the Internet Herokuapp homepage
  await page.goto('https://the-internet.herokuapp.com/');

  // 2. Assert that the text "Welcome to the-internet" is visible on the page
  const header = page.locator('h1'); // The main heading is usually in an <h1>
  await expect(header).toHaveText('Welcome to the-internet');

  console.log('✅ Page contains the expected welcome text.');
});
