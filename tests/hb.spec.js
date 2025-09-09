import { test, expect } from '@playwright/test';

test('Login flow test on Demoblaze', async ({ page }) => {



  await page.goto('https://www.hollandandbarrett.com/');

  
await page.locator('button.some-button-class >> #Icon').click();


});