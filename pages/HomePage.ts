import { Page } from '@playwright/test'
import { waitLoaderFinish } from '../helpers/waitLoaderFinish';

export class HomePage {
  constructor(private page: Page) { }

  async navigateToPopularMakePage() {
    await Promise.all([
      this.page.waitForURL('**/make/**'),
      this.page.click('a[href^="/make"]')
    ]);
    await waitLoaderFinish(this.page)
  }

  async navigateToPopularModelPage() {
    await Promise.all([
      this.page.waitForURL('**/model/**'),
      this.page.click('a[href^="/model"]')
    ]);
    await waitLoaderFinish(this.page)
  }

  async navigateToOverallPage() {
    await Promise.all([
      this.page.waitForURL('**/overall'),
      this.page.click('a[href^="/overall"]')
    ]);
    await waitLoaderFinish(this.page)
  }
}
