import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.bbc.com/news');
  await page.getByRole('button', { name: 'Sign In' }).click();
});