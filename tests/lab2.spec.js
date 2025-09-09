const { test, expect } = require('@playwright/test');

test('Verify Wikipedia title and print URL', async ({ page }) => {
  // 1. Navigate to Wikipedia main page
  await page.goto('https://www.wikipedia.org/');

  // 2. Assert the page title is "Wikipedia"
  await expect(page).toHaveTitle('Wikipedia');

  // 3. Print current page URL
  console.log('Current URL:', page.url());
});
