import { Page } from "playwright";
import { expect } from "playwright/test";

export class ModelPage {
    constructor(private page: Page) { }

    async voteAndVerify() {
        const voteBtn = this.page.locator('.btn.btn-success');
        const thankYouText = this.page.locator('.card-text:has-text("Thank you for your vote!")');

        if (await voteBtn.isVisible()) {
            await voteBtn.click();
        }

        await expect(thankYouText).toBeVisible();
    }

    async verifyPageTitle(modelName: string) {
        const modelPageTitle = await this.page.locator('h3').innerText()
        expect(modelPageTitle).toContain(modelName);
    }

}
