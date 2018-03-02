import { browser, element, by, protractor, ElementFinder } from 'protractor';
import { AbstractGreetingServicePage } from './abstractGreetingServicePage';

export class CircuitBreakerPage extends AbstractGreetingServicePage {

  private toggleButton = element(by.id('toggle'));
  private nameServiceState = element(by.xpath('//div[@id="name-state"]//span'));

  public constructor() {
    super(browser.params.url.boosters.circuitBreaker);
  }
  
  public get(){
    let parentGet = super.get();
    browser.wait(this.nameServiceState.isPresent(),5000);
    return parentGet;
  }

  public async clickToggle(): Promise<void> {
    return this.toggleButton.click();
  }

  public getNameServiceStateElement(): ElementFinder {
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
