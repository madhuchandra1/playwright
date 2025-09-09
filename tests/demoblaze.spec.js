import { test, expect } from '@playwright/test';

test('Login flow test on Demoblaze', async ({ page }) => {
  test.setTimeout(120_000);


  await page.goto('https://www.demoblaze.com/');

  
  await page.locator('#login2').click();


  await page.locator('#loginusername').fill('madhuchandrar');
  await page.locator('#loginpassword').fill('madhu@123');


  await page.locator('//*[@id="logInModal"]/div/div/div[3]/button[2]').click();
  await page.locator('//*[@id="navbarExample"]/ul/li[4]/a').click();

 
  const logout = page.locator('#logout2');
 await expect(logout).toBeVisible();


  await page.close();
});
