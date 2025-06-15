import { expect, Page } from '@playwright/test'

const FORM_CONTROL_SELECTOR = (name: string) => `[formcontrolname="${name}"]`

type User = {
  username: string
  firstName: string
  lastName: string
  password: string
}

export class RegistrationPage {
  constructor(private page: Page) { }

  async fillRegistrationForm(user: User) {
    const fields = {
      ...user,
      confirmPassword: user.password,
    }

    for (const [name, value] of Object.entries(fields)) {
      const locator = this.page.locator(FORM_CONTROL_SELECTOR(name))
      await locator.fill(value)
      await expect(locator).toHaveClass(/ng-valid/)
    }
  }

  async submitRegistration() {
    const submitBtn = this.page.locator('button:has-text("Register")')
    await expect(submitBtn).toBeEnabled()
    await submitBtn.click()

  }

  async isRegistrationSuccessful(): Promise<boolean> {
    const successMsg = this.page.locator('.result.alert-success')

    try {
      await successMsg.waitFor({ state: 'visible', timeout: 5000 })
      return true
    } catch {
      return false
    }
  }
}
