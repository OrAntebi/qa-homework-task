import { test, expect } from '@playwright/test'
import { utilService } from '../services/util.service'
import { RegistrationPage } from '../pages/RegistrationPage'
import { HomePage } from '../pages/HomePage'
import { ShoppingCartPage } from '../pages/ShoppingCartPage'

test('User Registration', async ({ page }) => {
    const registrationPage = new RegistrationPage(page)
    const homePage = new HomePage(page)
    const shoppingCartPage = new ShoppingCartPage(page)

    const uniqueEmail = `testuser${Date.now()}@example.com`

    await page.goto('https://demowebshop.tricentis.com')
    await page.click('.ico-register')

    await registrationPage.fillRegistrationForm(uniqueEmail, 'John', 'Doe', 'Test@1234')
    await registrationPage.submitRegistration()

    const emailHeader = await registrationPage.getEmailHeader()
    expect(emailHeader).toEqual(uniqueEmail)

    await homePage.navigateToDigitalDownloads()
    const productName = await utilService.addFirstProductToCart(page)
    await homePage.verifyProductAddedToCart()
    await homePage.navigateToShoppingCart()
    await shoppingCartPage.isProductInCart(productName)

})
