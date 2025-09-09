// tests/spec/inventory.test.js
const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/Logpage.spec');
const InventoryPage = require('../pages/inventorypage.spec');

test('Lab 2.2: Locator strategy mastery', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);

  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');
  await inventoryPage.isOnInventoryPage();

  const productName = 'Sauce Labs Backpack';

  // ✅ Strategy 1: getByText
  const product = await inventoryPage.getProductByText(productName);
  await expect(product).toBeVisible();

  // ✅ Strategy 2: getByAltText
  const image = await inventoryPage.getProductImageByAltText(productName);
  await expect(image).toBeVisible();

  // ✅ Strategy 3: CSS locator for Add to Cart
  const addToCartBtn = await inventoryPage.getAddToCartButtonForProduct(productName);
  await expect(addToCartBtn).toBeVisible();
  await addToCartBtn.click();
  await expect(addToCartBtn).toHaveText('Remove');
});
