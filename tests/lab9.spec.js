const { test, expect } = require('@playwright/test');

test('Navigate to BBC News homepage, verify URL, and print title', async ({ page }) => {
  // 1. Navigate to BBC News homepage
  await page.goto('https://www.bbc.com/news');

  // 2. Assert that the URL is correct
  await expect(page).toHaveURL('https://www.bbc.com/news');

  // 3. Print the title of the page to the console
  const title = await page.title();
  console.log('🔹 Page Title:', title);
});
