import { test, expect } from '@playwright/test';

test('locators', async ({page})=>{

    const url = 'https://demoblaze.com/index.html';

    await page.goto(url);

    // click on the login Link - property - 1st approach
    // const el = await page.locator('id=login2').click()

    // 2nd approach
    await page.click('id=login2'); // property of the element as locator

    // provide username - CSS element as locator
    const el3 = await page.locator('#loginusername').fill('pavanol');   // CSS-element  als locator

    // or CSS element  as selector
    const el7 = await page.fill("input[id='loginpassword']", 'test@123')

    // click on the Login button with Rel-XPath as Locator
    const cl8 = await page.click("//button[normalize-space()='Log in']");

    // verify logout link presence - XPath element as locator
    const logoutLink = await page.locator("(//a[normalize-space()='Log out'])");

    await expect(logoutLink).toBeVisible();

    //close the page
    await page.close();









});
