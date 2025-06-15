import { Page } from "playwright";

export class OverallPage {
    constructor(private page: Page) { }

    async clickFirstModelAndGetName() {
        const modelLink = this.page.locator('a[href^="/model"]').first();
        const modelName = await modelLink.innerText()
        await modelLink.click()

        return modelName
    }

    async clickFirstMakeAndGetName() {
        const makeLink = this.page.locator('a[href^="/make"]').first();
        const makeName = await makeLink.innerText()
        await makeLink.click()

        return makeName
    }

}
