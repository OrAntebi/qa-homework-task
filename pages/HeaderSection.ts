import { expect, Page } from '@playwright/test'
import { waitLoaderFinish } from '../helpers/waitLoaderFinish';


export class HeaderSection {
    constructor(private page: Page) { }

    async clickProfile() {
        await Promise.all([
            this.page.waitForURL('**/profile'),
            this.page.click('.nav-link[href="/profile"]')
        ]);
        await waitLoaderFinish(this.page)
    }

    async clickRegistration() {
        await Promise.all([
            this.page.waitForURL('**/register'),
            this.page.click('a[href^="/register"]')
        ]);
    }

    async login({ username, password }) {
        await this.page.fill('input[name="login"]', username);
        await this.page.fill('input[name="password"]', password);
        await this.page.click('button[type="submit"]');
    }

    async verifyLoginSuccess() {
        await this.page.waitForSelector('text=Logout');
    }

    async logout() {
        await Promise.all([
            this.page.waitForURL('**/'),
            this.page.click('.nav-link:has-text("Logout")'),
        ]);
    }

}
