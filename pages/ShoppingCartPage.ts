import { Page } from '@playwright/test'

export class ShoppingCartPage {
  constructor(private page: Page) { }

  async isProductInCart(productName: string): Promise<boolean> {
    const productLocator = this.page.locator(`.cart .product-name:has-text("${productName}")`);
    return await productLocator.isVisible();
  }
}
