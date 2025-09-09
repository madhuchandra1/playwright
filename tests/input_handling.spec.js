const { test, expect } = require('@playwright/test');

test('Todo input handling', async ({ page }) => {
  // Navigate to the TodoMVC app
  await page.goto('https://demo.playwright.dev/todomvc/');

  // Add multiple todo items
  const todoItems = ['Buy groceries', 'Walk the dog', 'Finish homework'];
  for (const item of todoItems) {
    await page.fill('.new-todo', item);
    await page.keyboard.press('Enter');
  }

  // Verify items were added
  await expect(page.locator('.todo-list li')).toHaveCount(3);

  // Complete the first todo
  await page.locator('.todo-list li').nth(0).locator('.toggle').check();

  // Verify it's marked as completed
  await expect(page.locator('.todo-list li').nth(0)).toHaveClass(/completed/);

  // Filter to show only completed items
  await page.click('a[href="#/completed"]');

  // Verify only one completed item is visible
  await expect(page.locator('.todo-list li')).toHaveCount(1);

  // Clear completed items
  await page.click('.clear-completed');

  // Verify remaining items are uncompleted
  await expect(page.locator('.todo-list li')).toHaveCount(2);
});
