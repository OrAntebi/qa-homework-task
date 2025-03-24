import { Page } from '@playwright/test'

export class RegistrationPage {
  constructor(private page: Page) {}

  async fillRegistrationForm(email: string, firstName: string, lastName: string, password: string) {
    await this.page.fill('#FirstName', firstName)
    await this.page.fill('#LastName', lastName)
    await this.page.fill('#Email', email)
    await this.page.fill('#Password', password)
    await this.page.fill('#ConfirmPassword', password)
  }

  async submitRegistration() {
    await this.page.click('#register-button')
    await this.page.click('text=Continue')
  }

  async getEmailHeader() {
    return this.page.locator('.header-links .account').textContent()
  }
}
