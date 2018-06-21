import {browser, by, element, ElementFinder} from 'protractor';

import {AbstractGreetingServicePage} from './AbstractGreetingServicePage';

export class CircuitBreakerPage extends AbstractGreetingServicePage {
  private toggleButton = element(by.id('toggle'));
  private clearButton = element(by.id('clear'));
  private nameServiceState = element(by.id('svc-state'));

  constructor(url: string = browser.params.url.circuitBreaker) {
    super(url);
  }

  /* tslint:disable:no-reserved-keywords -- get is a contextual keyword, but also probably the best name here */
  async get(): Promise<void> {
    await super.get();
    await browser.wait(this.nameServiceState.isPresent(), 5000);
  }
  /* tslint:enable:no-reserved-keywords */

  async clickToggle(): Promise<void> {
    return this.toggleButton.click();
  }

  async clickClear(): Promise<void> {
    return this.clearButton.click();
  }

  getNameServiceStateElement(): ElementFinder {
    return this.nameServiceState;
  }
}

export enum NameServiceState {
  Failure = 'FAIL',
  Working = 'OK',
}

export enum GreetingResult {
  Failure = 'Hello, Fallback',
  Working = 'Hello, World',
}
