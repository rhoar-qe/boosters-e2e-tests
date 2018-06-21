import {by, element, ElementFinder} from 'protractor';

import {AbstractPage} from '../AbstractPage';

export abstract class AbstractGreetingServicePage extends AbstractPage {
  static readonly GREETINGS_DEFAULT_NAME = 'World';

  private invokeButton = element(by.id('invoke'));
  private greetingResult = element(by.id('greeting-result'));

  protected constructor(url: string) {
    super(url);
  }

  async clickInvoke(): Promise<void> {
    return this.invokeButton.click();
  }

  getGreetingElement(): ElementFinder {
    return this.greetingResult;
  }

  protected setGreetingElement(greetingResult: ElementFinder) {
    this.greetingResult = greetingResult;
  }
}
