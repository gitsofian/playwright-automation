# command syntax
npx playwright test homepage --project=chromium --headed

# in debug mode
npx playwright test homepage --project=chromium --headed --debug

# Locators => 2 approach
await page.locator('locator').click()
await page.click('locator')



# Locating element in Playwright
- Property
- CSS element
- XPath
Examples:
await page.fill("#loginusername",'pavanol');      // CSS als locator
// or
await page.type('#loginusername', 'pavanol');      // CSS ald locator

// provide password - 
await page.locator('loginpassword').fill('test@123')

await page.fill('#loginpassword', 'test@123');

