import {browser, by, element, ElementFinder} from 'protractor';

import {AbstractAngularPage} from '../AbstractAngularPage';

export class CrudPage extends AbstractAngularPage {
  private fruitNameInput = element(by.model('form.name'));
  private saveButton = element(by.buttonText('Save'));

  constructor(url: string = browser.params.url.crud) {
    super(url);
  }

  async clearFruitName(): Promise<void> {
    return this.fruitNameInput.clear();
  }

  async setFruitName(name: string): Promise<void> {
    return this.fruitNameInput.sendKeys(name);
  }

  async clickSaveChanges(): Promise<void> {
    return this.saveButton.click();
  }

  getFruitElementByName(name: string): ElementFinder {
    return element.all(by.repeater('fruit in fruits'))
        /* tslint:disable:promise-function-async -- see https://github.com/angular/protractor/issues/4748 */
        .filter((row) => {
          const nameCell = row.element(by.binding('fruit.name'));
          return nameCell.getText().then(text => text === name);
        })
        /* tslint:enable:promise-function-async */
        .first();
  }

  async clickEditOnFruit(name: string): Promise<void> {
    return this.getFruitElementByName(name).element(by.xpath('.//a[@class = "btn" and text() = "Edit"]')).click();
  }

  async clickRemoveOnFruit(name: string): Promise<void> {
    return this.getFruitElementByName(name).element(by.xpath('.//a[@class = "btn" and text() = "Remove"]')).click();
  }
}
