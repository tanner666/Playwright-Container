import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByRole('heading', { name: 'To Do list' }).click();
});

test('add and delete task', async ({ page, browser }) => {
    await page.goto('http://localhost:3000/');

    // Detect the browser
    const browserType = browser.browserType();

    await page.getByRole('link', { name: 'add to do' }).click();
    await page.getByRole('textbox').click();
    await page.getByRole('textbox').fill('create12345');
    await page.getByRole('button', { name: 'add Todo' }).click();
    await expect(page.getByRole('cell', { name: 'create12345' })).toBeVisible();
    await page.getByRole('link', { name: 'delete' }).click();
    if (browserType.name() == 'webkit'){
      await page.locator(`xpath=//div[contains(@aria-label, 'create12345 Delete') or contains(text(), 'create12345 Delete')]`).locator('role=button').click();

    }
    else{
      await page.locator(`role=row[name=/.*create12345 Delete$/]`).locator('role=button').click();
    }
    await expect(page.getByRole('cell', { name: 'create12345' })).not.toBeVisible();

  });
