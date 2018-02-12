import { browser, element, by, protractor, ElementFinder } from 'protractor';
import { AbstractGreetingServicePage } from './abstractGreetingServicePage';

export class HttpPage extends AbstractGreetingServicePage {
  private nameInput = element(by.id('name'));

  public constructor(url: string = browser.params.url.boosters.http) {
    super(url);
  }

  public setName(name: string): any {
    return this.nameInput.sendKeys(name);
  }
}
