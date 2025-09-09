import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://monkeytype.com/');
  await page.getByRole('button', { name: 'reject non-essential' }).click();
  await page.locator('#wordsInput').fill(' after ');
  await page.locator('#wordsInput').press('Tab');
  await page.getByRole('button', { name: 'Restart Test' }).press('Enter');
  await page.getByRole('link', { name: '' }).click();
  await page.goto('https://monkeytype.com/');
});