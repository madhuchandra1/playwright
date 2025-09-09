import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';
import { join } from 'path';
 
test('Advanced Web Interactions - Complete Test Suite', async ({ page }) => {
  test.setTimeout(300000);
 
  // 1. Setup and Navigation - Alerts
  await page.goto('https://demoqa.com/alerts');
  await expect(page.getByRole('heading')).toContainText('Alerts');
 
  // 2. Handle Simple Alert
  page.once('dialog', async dialog => {
    expect(dialog.message()).toBe('You clicked a button');
    await dialog.accept();
  });
  await page.locator('#alertButton').click();
  await expect(page.locator('#alertButton')).toBeVisible();
 
  // 3. Handle Confirmation Alert (OK)
  page.once('dialog', async dialog => {
    expect(dialog.message()).toBe('Do you confirm action?');
    await dialog.accept();
  });
  await page.locator('#confirmButton').click();
  await expect(page.locator('#confirmResult')).toContainText('You selected Ok');
 
  // 4. Navigate and Interact within Frame
  await page.goto('https://demoqa.com/nestedframes');
  await expect(page.getByRole('heading')).toContainText('Nested Frames');
  const parentFrame = page.frameLocator('#frame1');
  const parentText = await parentFrame.locator('body').textContent();
  expect(parentText).toContain('Parent frame');
  const childFrame = parentFrame.frameLocator('iframe');
  const childText = await childFrame.locator('html').textContent();
  expect(childText).toContain('Child Iframe');
 
  // 5. Perform Complex Mouse Actions
  await page.goto('https://vinothqaacademy.com/mouse-event/');
  // Double Click
  await page.getByRole('button', { name: 'Double Click Me' }).dblclick();
  await expect(page.locator('#demo')).toContainText('Double Click Action is Performed');
  // Right Click
  await page.getByRole('button', { name: 'Right Click Me' }).click({ button: 'right' });
  await expect(page.locator('#myDiv')).toContainText('Registration Form');
  // Hover
  await page.locator('//*[@id="header"]/div[2]/div/div/div[3]/div[2]/div[2]/ul/li[5]/a').hover();
  await expect(page.locator('#header')).toContainText('Demo Sites');
 
  // 6. Execute Advanced Keyboard Inputs
  await page.goto('https://demoqa.com/text-box');
  await expect(page.getByRole('textbox', { name: 'Full Name' })).toBeEmpty();
  await page.getByRole('textbox', { name: 'Full Name' }).fill('Madhu');
  await page.getByRole('textbox', { name: 'Full Name' }).press('Tab');
  await page.getByRole('textbox', { name: 'name@example.com' }).press('Shift+Tab');
  await page.getByRole('textbox', { name: 'Full Name' }).press('Control+a');
  await page.getByRole('textbox', { name: 'Full Name' }).fill('Madhu');
  await expect(page.getByRole('textbox', { name: 'Full Name' })).toHaveValue('Madhu');
 
  // 7. Upload a File
  const testFilePath = join(process.cwd(), 'demo.txt');
  writeFileSync(testFilePath, 'Test file for upload');
  await page.goto('https://the-internet.herokuapp.com/upload');
  await expect(page.getByRole('heading')).toContainText('File Uploader');
  await page.getByRole('button', { name: 'Choose File' }).setInputFiles(testFilePath);
  await page.getByRole('button', { name: 'Upload' }).click();
  await expect(page.getByRole('heading')).toContainText('File Uploaded!');
  await expect(page.locator('#uploaded-files')).toContainText('demo.txt');
 
  // 8. Scroll to an Element
  await page.goto('https://the-internet.herokuapp.com/large');
  const lastRow = page.locator('#large-table tbody tr').last();
  await lastRow.scrollIntoViewIfNeeded();
  await expect(lastRow).toBeInViewport();
  await lastRow.click();
});

