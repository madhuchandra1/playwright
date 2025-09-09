const { test, expect } = require('@playwright/test');

test('Navigate to GitHub homepage and check title & URL', async ({ page }) => {
  await page.goto('https://github.com/');

  const title = await page.title();
  const currentUrl = page.url();
  console.log('🔹 Page Title:', title);
  console.log('🔹 Current URL:', currentUrl);

  await expect(page).toHaveTitle(/GitHub/);
});
