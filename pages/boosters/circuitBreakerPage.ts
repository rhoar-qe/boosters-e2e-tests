import {browser, by, element, ElementFinder, protractor} from 'protractor';

import {AbstractGreetingServicePage} from './abstractGreetingServicePage';

export class CircuitBreakerPage extends AbstractGreetingServicePage {
  private toggleButton = element(by.id('toggle'));
  private nameServiceState = element(by.xpath('//div[@id="name-state"]//span'));

  constructor() {
    super(browser.params.url.boosters.circuitBreaker);
  }

  get() {
    const parentGet = super.get();
    browser.wait(this.nameServiceState.isPresent(), 5000);
    return parentGet;
  }

  async clickToggle(): Promise<void> {
    return this.toggleButton.click();
  }

  getNameServiceStateElement(): ElementFinder {
    return this.nameServiceState;
  }
}

export enum NameServiceState {
  Failure = 'FAIL',
  Working = 'OK'
}

export enum GreetingResult {
  Failure = 'Hello, Fallback',
  Working = 'Hello, World'
}
