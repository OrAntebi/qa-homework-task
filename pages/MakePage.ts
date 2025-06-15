import { Page } from "playwright";
import { expect } from "playwright/test";

export class MakePage {
    constructor(private page: Page) { }


    async verifyPageTitle(makeName: string) {
        const makePageTitle = await this.page.locator('h3').innerText()
        expect(makePageTitle).toContain(makeName);
    }
}
