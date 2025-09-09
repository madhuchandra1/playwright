import { test, expect } from '@playwright/test';

test('swag labs', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/');

  const title = await page.title();
  console.log('Page title:', title);
  await expect(page).toHaveTitle('Swag Labs');
  const loginForm = page.locator('form'); 

  await expect(loginForm).toBeVisible();
});
const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/Logpage.spec');

test('Login form should be visible', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();

  // Assert that the login form is visible
  await expect(loginPage.usernameInput).toBeVisible();
  await expect(loginPage.passwordInput).toBeVisible();
  await expect(loginPage.loginButton).toBeVisible();
});

