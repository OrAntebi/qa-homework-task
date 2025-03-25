import { expect, Page } from '@playwright/test'

export class HomePage {
  constructor(private page: Page) { }

  async navigateToRegistration() {
    const pageTitle = this.page.locator('.page-title h1')
    await this.page.click('.ico-register')
    expect(pageTitle).toHaveText('Register')
  }

  async navigateToDigitalDownloads() {
    const pageTitle = this.page.locator('.page-title h1')
    await this.page.click('a[href="/digital-downloads"]')
    expect(pageTitle).toHaveText('Digital downloads')
  }

  async navigateToShoppingCart() {
    const pageTitle = this.page.locator('.page-title h1')
    await this.page.click('.header-links .ico-cart')
    expect(pageTitle).toHaveText('Shopping cart')
  }

  async addFirstProductToCart() {
    const firstProduct = this.page.locator('.product-grid .item-box:first-of-type')
    await firstProduct.locator('.product-box-add-to-cart-button').click()
    return firstProduct.locator('.product-title a').textContent()
}

  async verifyProductAddedToCart() {
    const notificationMessage = await this.page.locator('#bar-notification .content').textContent()
    expect(notificationMessage).toEqual('The product has been added to your shopping cart')
  }
}
