class InventoryPage {
  constructor(page) {
    this.page = page;
    this.productsTitle = page.locator('.title');
    this.inventoryContainer = page.locator('.inventory_list');
    this.cartIcon = page.locator('.shopping_cart_link');
    this.sortDropdown = page.getByRole('combobox');
  }

  async addItem(itemName) {
    const addButton = this.page.locator(`//div[text()="${itemName}"]/ancestor::div[@class="inventory_item"]//button`);
    await addButton.click();
  }

  async openCart() {
    await this.cartIcon.click();
  }

  async sortByLowToHigh() {
    await this.sortDropdown.selectOption('lohi');  // "Price (low to high)"
  }

  async getItemPrices() {
    const prices = await this.page.$$eval('.inventory_item_price', els =>
      els.map(e => parseFloat(e.textContent.replace('$', '')))
    );
    return prices;
  }
}

module.exports = { InventoryPage };
