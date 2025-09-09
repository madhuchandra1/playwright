import { test, expect } from '@playwright/test';
test('locator',async({page})=>{
    test.setTimeout(500_000);
    await page.goto('https://www.demoblaze.com/');
    //text locator
    await page.locator('id=login2').click();
    await page.locator('id=loginusername').fill("Madhu");
    await page.locator('id=loginpassword').fill("madhu@123");
    //X-path locator
    await page.$('//*[@id="logInModal"]/div/div/div[3]/button[2]');
    //CSS locator
    await page.$('#cartur');
   await page.locator('id=itemc');
   await page.$('//*[@id="tbodyid"]/div[1]/div/a/img');
 
 
   await page.locator('#logInModal > div > div > div.modal-footer > button.btn.btn-secondary');
   await page.close();
 
});
 