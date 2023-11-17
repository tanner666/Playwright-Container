import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://is373-t3-stack.vercel.app/');
  await page.getByRole('heading', { name: 'To Do list' }).click();
});


test('add and delete task', async ({ page, browser }) => {
    await page.goto('https://is373-t3-stack.vercel.app/');

    //add
    await page.getByRole('link', { name: 'add to do' }).click();
    await page.getByRole('textbox').click();
    await page.getByRole('textbox').fill('create12345');
    await page.getByRole('button', { name: 'add Todo' }).click();
    await expect(page.getByRole('cell', { name: 'create12345' })).toBeVisible();

    //delete
    await page.getByRole('link', { name: 'delete' }).click();
    await page.locator(`role=row[name=/.*create12345 Delete$/]`).locator('role=button').click();
    await expect(page.getByRole('cell', { name: 'create12345' })).not.toBeVisible();
  });


test('todo list', async({page}) => {
  await page.goto('https://is373-t3-stack.vercel.app/');

  //add
  await page.getByRole('link', { name: 'add to do' }).click();
  await page.getByRole('textbox').click();
  await page.getByRole('textbox').fill('create12347');
  await page.getByRole('button', { name: 'add Todo' }).click();

  //check new task appears on todolist
  await page.getByRole('link', { name: 'toDo list' }).click();
  await expect(page.getByRole('cell', { name: 'create12347' })).toBeVisible();

  });


test('add edit and delete task', async ({ page }) => {
    try{
    
      await page.goto('https://is373-t3-stack.vercel.app/');
      //add
      await page.getByRole('link', { name: 'add to do' }).click();
      await page.getByRole('textbox').click();
      await page.getByRole('textbox').fill('create12346');
      await page.getByRole('button', { name: 'add Todo' }).click();
      await expect(page.getByRole('cell', { name: 'create12346' })).toBeVisible();

      //edit
      await page.getByRole('link', { name: 'edit' }).click();
      await page.locator(`role=row[name=/.*create12346 Edit Todo$/]`).locator('role=textbox').click();
      await page.locator(`role=row[name=/.*create12346 Edit Todo$/]`).locator('role=textbox').fill('create54321');
      await page.locator(`role=row[name=/.*create54321 Edit Todo$/]`).locator('role=button').click();
      await expect(page.getByRole('cell', { name: 'create54321' })).toBeVisible();

      
      //delete
      await page.getByRole('link', { name: 'delete' }).click();
      await page.locator(`role=row[name=/.*create54321 Delete$/]`).locator('role=button').click();
      await expect(page.getByRole('cell', { name: 'create54321' })).not.toBeVisible();
    }
    catch(error){
      //extra cleanup
      if (await page.getByRole('cell', { name: 'create12346' }).isVisible()){
        await page.getByRole('link', { name: 'delete' }).click();
        await page.locator(`role=row[name=/.*create12346 Delete$/]`).locator('role=button').click();
      }
      throw error;
    }
  });
