

export const utilService = {
    addFirstProductToCart
}


async function addFirstProductToCart(page: any) {
    const product = await page.locator('.product-grid .item-box:first-of-type .product-title a')
    const addToCartBtn = await page.locator('.product-grid .item-box:first-of-type .product-box-add-to-cart-button')
    await addToCartBtn.click()
    return product.textContent()
}