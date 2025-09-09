
import { test, expect } from '@playwright/test';

test('Validate page title and URL', async ({ page }) => {
  await page.goto('https://www.hollandandbarrett.com/');

  const actualTitle = await page.title();
  const actualUrl = page.url();

  const expectedTitle = "Holland & Barrett - UK's Leading Health & Wellbeing Store";
  const expectedUrl = "https://www.hollandandbarrett.com/";

  expect(actualTitle).toBe(expectedTitle);
  expect(actualUrl).toBe(expectedUrl);
});

