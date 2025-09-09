const { test, expect } = require('@playwright/test');

test('Navigate to Herokuapp and verify title & URL after redirect', async ({ page }) => {
  // 1. Navigate to the Herokuapp URL
  const targetUrl = 'https://the-internet.herokuapp.com/';
  await page.goto(targetUrl);

  // 2. Assert the title is "The Internet"
  await expect(page).toHaveTitle('The Internet');

  // 3. Verify the final URL has not changed (no redirect)
  await expect(page).toHaveURL(targetUrl);

  console.log('✅ Title and URL verified successfully for Herokuapp.');
});
