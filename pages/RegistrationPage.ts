import { expect, Page } from '@playwright/test'

export class RegistrationPage {
  constructor(private page: Page) { }

  async fillRegistrationForm(email: string, firstName: string, lastName: string, password: string) {
    await this.page.fill('#FirstName', firstName)
    await this.page.fill('#LastName', lastName)
    await this.page.fill('#Email', email)
    await this.page.fill('#Password', password)
    await this.page.fill('#ConfirmPassword', password)
  }

  async submitRegistration() {
    await this.page.click('#register-button')
    await this.page.click('.register-continue-button')
  }

  async getEmailHeader(): Promise<string> {
    return (await this.page.locator('.header-links .account').textContent()) ?? ''
  }

  async verifyItemIsAddedToCart() {
    const notificationMessage = await this.page.locator('#bar-notification .content').textContent()
    expect(notificationMessage).toBe('The product has been added to your shopping cart')
  }
}
