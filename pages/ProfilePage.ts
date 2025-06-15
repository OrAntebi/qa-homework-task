import { Page } from "playwright";
import { expect } from "playwright/test";

export class ProfilePage {
    constructor(private page: Page) { }

    async fillInput(fieldName, text) {
        await this.page.fill(`input[name='${fieldName}']`, text)
    }

    async submitAndVerify() {
        await this.page.click('.btn[type="submit"]')
        const successMsg = this.page.locator('.result.alert-success:not(.hidden-md-down)')
        await expect(successMsg).toContainText('The profile has been saved successful')
    }
}
