// pages/InventoryPage.js
class InventoryPage {
  constructor(page) {
    this.page = page;
    this.productsTitle = page.getByText('Products');
    this.inventoryItems = page.locator('.inventory_item');
  }

  async isOnInventoryPage() {
    await this.page.waitForURL(/.*inventory\.html/);
    await this.productsTitle.waitFor({ state: 'visible' });
  }

  async getItemCount() {
    return await this.inventoryItems.count();
  }

  async getProductByText(name) {
    return this.page.getByText(name);
  }

  async getProductImageByAltText(altText) {
    return this.page.getByAltText(altText);
  }

  async getAddToCartButtonForProduct(productName) {
    return this.page.locator(`.inventory_item:has-text("${productName}") button`);
  }
}

// ✅ This is crucial
module.exports = InventoryPage;
