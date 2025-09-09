import { test, expect } from '@playwright/test';
 
test('test', async ({ page }) => {
  // Navigate to the TodoMVC demo application
  await page.goto('https://demo.playwright.dev/todomvc/#/');
 
  // Focus on the input textbox for adding a new todo item
  await page.getByRole('textbox', { name: 'What needs to be done?' }).click();
 
  // Simulate CapsLock press (not necessary for filling text, but included here)
  await page.getByRole('textbox', { name: 'What needs to be done?' }).press('CapsLock');
 
  // Fill the textbox with the first character
  await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('S');
 
  // Toggle CapsLock again
  await page.getByRole('textbox', { name: 'What needs to be done?' }).press('CapsLock');
 
  // Fill the complete first todo item
  await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('Saturday holiday');
 
  // Submit the first todo item
  await page.getByRole('textbox', { name: 'What needs to be done?' }).press('Enter');
 
  // Begin entering second todo item
  await page.getByRole('textbox', { name: 'What needs to be done?' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('C');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('Complete ');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('Complete A');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('Complete Assignment');
 
  // Submit the second todo item
  await page.getByRole('textbox', { name: 'What needs to be done?' }).press('Enter');
 
  // Mark the first todo item ("Saturday holiday") as completed
  await page.getByRole('listitem').filter({ hasText: 'Saturday holiday' }).getByLabel('Toggle Todo').check();
 
  // Click the "Clear completed" button to remove completed items
  await page.getByRole('button', { name: 'Clear completed' }).click();
 
  // Mark the second todo item ("Complete Assignment") as completed
  await page.getByRole('checkbox', { name: 'Toggle Todo' }).check();
 
  // Clear the completed second item
  await page.getByRole('button', { name: 'Clear completed' }).click();
});
 