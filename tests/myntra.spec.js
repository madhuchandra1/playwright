import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.myntra.com/');
  await page.getByRole('textbox', { name: 'Search for products, brands' }).click();
  await page.getByRole('textbox', { name: 'Search for products, brands' }).click();
  await page.getByRole('textbox', { name: 'Search for products, brands' }).fill('casio edifice w');
});