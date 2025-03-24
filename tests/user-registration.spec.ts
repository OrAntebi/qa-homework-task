import { test, expect } from '@playwright/test'
import { RegistrationPage } from '../pages/registration.page'

test('User Registration', async ({ page }) => {
    const registrationPage = new RegistrationPage(page)
    const uniqueEmail = `testuser${Date.now()}@example.com`

    await page.goto('https://demowebshop.tricentis.com')
    await page.click('text=Register')

    await registrationPage.fillRegistrationForm(uniqueEmail, 'John', 'Doe', 'Test@1234')
    await registrationPage.submitRegistration()

    const emailHeader = await registrationPage.getEmailHeader()
    expect(emailHeader).toContain(uniqueEmail)
})
