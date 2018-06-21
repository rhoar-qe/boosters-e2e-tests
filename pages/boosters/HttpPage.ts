import {browser, by, element} from 'protractor';

import {AbstractGreetingServicePage} from './AbstractGreetingServicePage';

export class HttpPage extends AbstractGreetingServicePage {
  private nameInput = element(by.id('name'));

  constructor(url: string = browser.params.url.http) {
    super(url);
  }

  async setName(name: string): Promise<void> {
    return this.nameInput.sendKeys(name);
  }

  getExceptedGreetingResult(name: string): string {
    return `Hello, ${name}!`;
  }
}
