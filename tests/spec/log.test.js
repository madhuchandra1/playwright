const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/Logpage.spec');

test('User should be able to login successfully with valid credentials', async ({ page }) => {
  // Create an instance of the LoginPage
  const loginPage = new LoginPage(page);

  // Go to the login page
  await loginPage.goto();

  // Login with valid credentials
  await loginPage.login('standard_user', 'secret_sauce');

  // ✅ Assert: URL should contain "/inventory.html"
  await expect(page).toHaveURL(/inventory\.html/);

  // ✅ Optional: Assert that the page title contains "Swag Labs"
  await expect(page).toHaveTitle(/Swag Labs/);
});