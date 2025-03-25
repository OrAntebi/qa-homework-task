import { test, expect } from '@playwright/test'
import { utilService } from '../services/util.service'
import { RegistrationPage } from '../pages/RegistrationPage'
import { HomePage } from '../pages/HomePage'
import { ShoppingCartPage } from '../pages/ShoppingCartPage'

test('User Registration', async ({ page }) => {
    const registrationPage = new RegistrationPage(page)
    const homePage = new HomePage(page)
    const shoppingCartPage = new ShoppingCartPage(page)

    const uniqueEmail = await utilService.getRandomEmailAddress()

    await page.goto('https://demowebshop.tricentis.com')
    await homePage.navigateToRegistration()

    await registrationPage.fillRegistrationForm(uniqueEmail, 'Test1', 'Test2', 'aT12dHas!@f1')
    await registrationPage.submitRegistration()

    const emailHeader = await registrationPage.getEmailHeader()
    expect(emailHeader).toBe(uniqueEmail)

    await homePage.navigateToDigitalDownloads()
    const productName = await homePage.addFirstProductToCart()
    await homePage.verifyProductAddedToCart()

    await homePage.navigateToShoppingCart()
    if (!productName) throw new Error('Failed to retrieve product name');
    await shoppingCartPage.isProductInCart(productName);
})
