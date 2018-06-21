import {browser, by, element} from 'protractor';

import {CrudPage} from './CrudPage';

export class CrudPageWithStock extends CrudPage {
  private addEditFruitStock = element(by.model('form.stock'));

  constructor(url: string = browser.params.url.crud) {
    super(url);
  }

  async clearFruitStock(): Promise<void> {
    return this.addEditFruitStock.clear();
  }

  async setFruitStock(stock: string): Promise<void> {
    return this.addEditFruitStock.sendKeys(stock);
  }

  async getFruitStockValue(): Promise<string> {
    return this.addEditFruitStock.getAttribute('value');
  }
}
