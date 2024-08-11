const { test, expect } = require('@playwright/test')

test.only('first playwright test',async ({browser}) =>{

  const context = await browser.newContext()
  const page = await context.newPage()
 await page.goto('https://rahulshettyacademy.com/loginpagePractise/')

 await page.locator("#username").fill("rahulshetty")
 await page.locator("[type='password']").fill("password123")
 await page.locator("#signInBtn").click()

 console.log(await page.locator("[style*='block']").textContent()) // it is a hidden element
 expect(await page.locator("[style*='block']").textContent()).toContain('Incorrect username/password.') // asserting the error message

})
test('page playwright test',async ({page}) =>{

    //no need to set browser context , can use default mode

    // const context = await browser.newContext()
    // const page = await context.newPage() 

    await page.goto('https://www.google.com')
    await expect(page).toHaveTitle('Google')
  
  })