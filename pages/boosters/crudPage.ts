import {browser, by, element, ElementFinder, promise, protractor} from 'protractor';

import {AbstractAngularPage} from '../abstractAngularPage';

export class CrudPage extends AbstractAngularPage {
  private addEditFruitName =
      element(by.xpath('//input[@ng-model="form.name"]'));
  private addEditFruitStock =
      element(by.xpath('//input[@ng-model="form.stock"]'));
  private saveChanges = element(by.xpath('//input[@type="submit"]'));

  constructor() {
    super(browser.params.url.boosters.crud);
  }

  async clearFruitName(): Promise<void> {
    this.addEditFruitName.clear();
  }

  async clearFruitStock(): Promise<void> {
    this.addEditFruitStock.clear();
  }

  async setFruitName(name: string): Promise<void> {
    return this.addEditFruitName.sendKeys(name);
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

  async clickSaveChanges(): Promise<void> {
    return this.saveChanges.click();
  }

  getElementByNameAndStock(name: string, stock: string): ElementFinder {
    return element(by.xpath(
        '//div[@ng-repeat="fruit in fruits"]/div[text()="' + name +
        '"]/../div[text()="' + stock + '"]/..'));
  }

  async clickEditOnFruit(name: string): Promise<void> {
    element(by.xpath(
                '//div[@ng-repeat="fruit in fruits"]/div[text()="' + name +
                '"]/..//a[@class="btn" and text() ="Edit"]'))
        .click();
  }

  async clickRemoveOnFruit(name: string): Promise<void> {
    element(by.xpath(
                '//div[@ng-repeat="fruit in fruits"]/div[text()="' + name +
                '"]/..//a[@class="btn" and text() ="Remove"]'))
        .click();
  }
}
