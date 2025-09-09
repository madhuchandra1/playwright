const { test, expect } = require('@playwright/test');
const { LoginPage } = require('./pages/LoginPage');
const { InventoryPage } = require('./pages/InventoryPage');
const { CartPage } = require('./pages/CartPage');
const { CheckoutPage } = require('./pages/CheckoutPage');

/*
 Lab 3.1: Shopping Cart Functionality
*/
test('Lab 3.1 - Shopping Cart Functionality', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);

  // Step 1: Login
  await loginPage.goto();
  await page.waitForTimeout(1000);
  await loginPage.login('standard_user', 'secret_sauce');
  await page.waitForTimeout(1000);
  await expect(inventoryPage.productsTitle).toHaveText('Products');

  // Step 2: Add 2 items
  await inventoryPage.addItem('Sauce Labs Backpack');
  await page.waitForTimeout(1000);
  await inventoryPage.addItem('Sauce Labs Bike Light');
  await page.waitForTimeout(1000);

  // Step 3: Verify shopping cart badge shows "2"
  await expect(page.locator('.shopping_cart_badge')).toHaveText('2');
  await page.waitForTimeout(1000);

  // Step 4: Go to cart
  await inventoryPage.openCart();
  await page.waitForTimeout(1000);
  await expect(page).toHaveURL(/.*cart.html/);

  // Step 5: Verify cart contains exactly 2 items
  await expect(cartPage.cartItems).toHaveCount(2);
  await expect(cartPage.cartItems).toContainText([
    'Sauce Labs Backpack',
    'Sauce Labs Bike Light'
  ]);
  await page.waitForTimeout(2000);
});

/*
 Lab 3.2: Handling Dynamic Sorting
*/
test('Lab 3.2 - Verify product sorting by price (low to high)', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);

  // Step 1: Login
  await loginPage.goto();
  await page.waitForTimeout(1000);
  await loginPage.login('standard_user', 'secret_sauce');
  await page.waitForTimeout(1000);
  await expect(inventoryPage.productsTitle).toHaveText('Products');

  // Step 2: Sort products by "Price (low to high)"
  await inventoryPage.sortByLowToHigh();
  await page.waitForTimeout(2000); // wait for UI update

  // Step 3: Get product prices and check ascending order
  const prices = await inventoryPage.getItemPrices();
  const sortedPrices = [...prices].sort((a, b) => a - b);
  expect(prices).toEqual(sortedPrices);

  await page.waitForTimeout(2000);
});

/*
 Lab 4.1 + 5.1: End-to-End Checkout Process with POM
*/
test('Lab 4.1/5.1 - E2E Checkout Flow', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  // Step 1: Login
  await loginPage.goto();
  await page.waitForTimeout(1000);
  await loginPage.login('standard_user', 'secret_sauce');
  await page.waitForTimeout(1000);
  await expect(inventoryPage.productsTitle).toHaveText('Products');

  // Step 2: Add items to cart
  await inventoryPage.addItem('Sauce Labs Backpack');
  await page.waitForTimeout(1000);
  await inventoryPage.addItem('Sauce Labs Bike Light');
  await page.waitForTimeout(1000);
  await inventoryPage.openCart();
  await page.waitForTimeout(1000);

  // Step 3: Validate cart
  await expect(cartPage.cartItems).toHaveCount(2);
  await page.waitForTimeout(1000);
  await cartPage.proceedToCheckout();
  await page.waitForTimeout(1000);

  // Step 4: Checkout process
  await checkoutPage.fillDetails('John', 'Doe', '12345');
  await page.waitForTimeout(1000);
  await checkoutPage.finishCheckout();
  await page.waitForTimeout(1000);

  // Step 5: Verify success
  await expect(checkoutPage.successMsg).toHaveText('Thank you for your order!');
  await page.waitForTimeout(2000);
});
