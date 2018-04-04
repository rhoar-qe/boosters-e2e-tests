import {browser, by, element, ElementFinder, promise, protractor} from 'protractor';

import {CrudPage} from './';

export class CrudPageWithStock extends CrudPage {
  constructor() {
    super();
  }

  private addEditFruitStock =
      element(by.xpath('//input[@ng-model="form.stock"]'));

  async clearFruitStock(): Promise<void> {
    this.addEditFruitStock.clear();
  }

  async setFruitStock(stock: string) {
    return this.addEditFruitStock.sendKeys(stock);
  }

  async getFruitStockValue(): Promise<string> {
    return this.addEditFruitStock.getAttribute('value');
  }

  getFruitStockElement(): ElementFinder {
    return this.addEditFruitStock;
  }

  getElementByNameAndStock(name: string, stock: string): ElementFinder {
    return element(by.xpath(
        '//div[@ng-repeat="fruit in fruits"]/div[text()="' + name +
        '"]/../div[text()="' + stock + '"]/..'));
  }
}
