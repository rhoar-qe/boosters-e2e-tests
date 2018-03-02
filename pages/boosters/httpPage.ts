import {browser, by, element, ElementFinder, protractor} from 'protractor';

import {AbstractGreetingServicePage} from './abstractGreetingServicePage';

export class HttpPage extends AbstractGreetingServicePage {
  private nameInput = element(by.id('name'));

  constructor(url: string = browser.params.url.boosters.http) {
    super(url);
  }

  setName(name: string): {} {
    return this.nameInput.sendKeys(name);
  }
}
