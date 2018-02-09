import { browser, element, by, protractor, ElementFinder } from 'protractor';
import { AbstractGreetingServicePage } from './abstractGreetingServicePage';

export class CircuitBreakerPage extends AbstractGreetingServicePage {

  private toggleButton = element(by.id('toggle'));
  private nameServiceState = element(by.xpath('//p[@id="name-state"]//span[@id="svc-state"]'));

  public constructor() {
    super(browser.params.url.boosters.circuitBreaker);
  }

  public async clickToggle(): Promise<void> {
    return this.toggleButton.click();
  }

  public getNameServiceStateElement(): ElementFinder {
    return this.nameServiceState;
  }

}

export enum NameServiceState {
  Failure = 'failure state',
  Working = 'working state'
}

export enum GreetingResult {
  Failure = '{"content":"Hello, Fallback!"}',
  Working = '{"content":"Hello, World!"}'
}
