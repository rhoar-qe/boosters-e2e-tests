import {browser, by, element, ElementFinder, protractor} from 'protractor';

import {AbstractNonAngularPage} from '../abstractNonAngularPage';

export abstract class AbstractGreetingServicePage extends
    AbstractNonAngularPage {
  private invokeButton = element(by.id('invoke'));
  private greetingResult = element(by.id('greeting-result'));

  static readonly GREETINGS_DEFAULT_NAME = 'World';

  constructor(url: string) {
    super(url);
  }

  clickInvoke() {
    return this.invokeButton.click();
  }

  protected setGreetingElement(greetingResult: ElementFinder) {
    this.greetingResult = greetingResult;
  }

  getGreetingElement(): ElementFinder {
    return this.greetingResult;
  }
}
