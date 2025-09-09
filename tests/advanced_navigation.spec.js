const { test, expect } = require('@playwright/test');

test('Advanced navigation patterns', async ({ page }) => {
  // Navigate to redirector page
  await page.goto('https://the-internet.herokuapp.com/redirector');

  // Click redirect link and wait for navigation
  await page.click('#redirect');

  // Wait for the final redirected URL to load
  await page.waitForURL('**/status_codes');

  // Verify redirection was successful
  await expect(page).toHaveURL('https://the-internet.herokuapp.com/status_codes');

  // Navigate back to the original redirector page
  await page.goBack();
  await expect(page).toHaveURL('https://the-internet.herokuapp.com/redirector');

  // Test waiting for specific navigation events
  await Promise.all([
    page.waitForNavigation({ waitUntil: 'networkidle' }),
    page.goto('https://the-internet.herokuapp.com/')
  ]);

  // Verify navigation completed
  await expect(page).toHaveURL('https://the-internet.herokuapp.com/');

  // Test reload with options
  await page.reload({ waitUntil: 'domcontentloaded' });
});
