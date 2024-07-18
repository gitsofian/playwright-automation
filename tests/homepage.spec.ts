import { test, expect } from '@playwright/test';

test('my_test',async ({page}) => {

    const url = 'https://demoblaze.com/index.html';
    await page.goto(url);

    const pageTitle = await page.title();
    console.log("Page Title :",pageTitle);

    await expect(page).toHaveTitle('STORE');
    await expect(page).toHaveURL(url);

    await page.close();
})