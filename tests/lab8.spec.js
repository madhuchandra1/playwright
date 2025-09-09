const { test, expect } = require('@playwright/test');

test('Navigate to GitHub homepage and check title & URL', async ({ page }) => {
  // 1. Navigate to GitHub homepage
  await page.goto('https://github.com/');

  // 2. Print the page title and URL
  const title = await page.title();
  const currentUrl = page.url();
  console.log('🔹 Page Title:', title);
  console.log('🔹 Current URL:', currentUrl);

  // 3. Assert the title is exactly as expected
  await expect(page).toHaveTitle('GitHub: Let’s build from here · GitHub');
});
