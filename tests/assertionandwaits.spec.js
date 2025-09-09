import { test, expect } from '@playwright/test';
 
test('test', async ({ page }) => {
  // Explicit navigation wait
  await page.goto('https://testautomationpractice.blogspot.com/', { waitUntil: 'domcontentloaded' });
  await expect(page).toHaveTitle(/Automation/);
  await expect(page).toHaveURL(/testautomationpractice/);
 
  // Textbox: Enter Name
  await page.getByRole('textbox', { name: 'Enter Name' }).click();
  await page.waitForTimeout(2000); // static wait
  await page.getByRole('textbox', { name: 'Enter Name' }).fill('Madhu');
  await expect(page.getByRole('textbox', { name: 'Enter Name' })).toHaveValue('Madhu');
 
  // Textbox: Enter EMail
  await page.getByRole('textbox', { name: 'Enter EMail' }).click();
//   await page.waitForSelector('input[name="email"]'); // explicit selector wait
  await page.getByRole('textbox', { name: 'Enter EMail' }).waitFor();
  await page.getByRole('textbox', { name: 'Enter EMail' }).fill('xyz@gmail.com');
  await expect(page.getByRole('textbox', { name: 'Enter EMail' })).toHaveValue('xyz@gmail.com');
 
  // Textbox: Enter Phone
  await page.getByRole('textbox', { name: 'Enter Phone' }).click();
  await page.getByRole('textbox', { name: 'Enter Phone' }).fill('1234567890');
  await expect(page.getByRole('textbox', { name: 'Enter Phone' })).toHaveValue('1234567890');
 
  // Textbox: Address
  await page.getByRole('textbox', { name: 'Address:' }).click();
  await page.getByRole('textbox', { name: 'Address:' }).fill('x/y, xyz, 987654');
  await expect(page.getByRole('textbox', { name: 'Address:' })).toHaveValue(/xyz/);
 
  // Radio
  await page.getByRole('radio', { name: 'Male', exact: true }).check();
  await expect(page.getByRole('radio', { name: 'Male', exact: true })).toBeChecked();
 
  // Checkbox
  await page.getByRole('checkbox', { name: 'Sunday' }).check();
  await expect(page.getByRole('checkbox', { name: 'Sunday' })).toBeChecked();
 
  // Dropdown: Country
  await page.getByLabel('Country:').selectOption('france');
  await expect(page.getByLabel('Country:')).toHaveValue('france');
 
  // Dropdown: Colors
  await page.getByLabel('Colors:').selectOption('red');
  await expect(page.getByLabel('Colors:')).toHaveValue('red');
 
  // Dropdown: Sorted List
  await page.getByLabel('Sorted List:').selectOption('cat');
  await expect(page.getByLabel('Sorted List:')).toHaveValue('cat');
 
  // Visibility & enabled assertions
  await expect(page.getByRole('textbox', { name: 'Enter Name' })).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Enter Name' })).toBeEnabled();
});