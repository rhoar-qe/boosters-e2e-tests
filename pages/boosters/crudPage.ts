import {browser, by, element, ElementFinder, promise, protractor} from 'protractor';

import {AbstractAngularPage} from '../abstractAngularPage';

export class CrudPage extends AbstractAngularPage {
  private addEditFruitName =
      element(by.xpath('//input[@ng-model="form.name"]'));
  private saveChanges = element(by.xpath('//input[@type="submit"]'));

  constructor() {
    super(browser.params.url.boosters.crud);
  }

  async clearFruitName(): Promise<void> {
    this.addEditFruitName.clear();
  }

  async setFruitName(name: string): Promise<void> {
    return this.addEditFruitName.sendKeys(name);
  }

  async clickSaveChanges(): Promise<void> {
    return this.saveChanges.click();
  }

  getElementByName(name: string): ElementFinder {
    return element(by.xpath(
        '//div[@ng-repeat="fruit in fruits"]/div[text()="' + name + '"]'));
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
