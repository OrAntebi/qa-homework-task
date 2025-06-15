import { Page } from '@playwright/test';

export async function waitLoaderFinish(page: Page) {
    const spinner = page.locator('img[src="/img/spin.gif"]');

    await spinner.waitFor({ state: 'attached' });
    await spinner.waitFor({ state: 'detached' });
}
