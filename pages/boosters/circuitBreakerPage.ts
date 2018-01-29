import {browser, element, by, protractor, ElementFinder, promise} from 'protractor';

export class CircuitBreakerPage {

  private static readonly URL = browser.params.url.boosters.circuitBreaker;

  private invokeButton = element(by.id('invoke'));
  private toggleButton = element(by.id('toggle'));
  private nameServiceState = element(by.xpath('//p[@id="name-state"]//span[@id="svc-state"]'));
  private greetingResult = element(by.id('greeting-result'));

  public constructor(){
    browser.ignoreSynchronization = true;
    browser.waitForAngularEnabled(false);
    this.get();
  }

  public get() {
    return browser.get(CircuitBreakerPage.URL);
  }

  public clickToggle(){
    this.toggleButton.click();
  }

  public clickInvoke(){
    this.invokeButton.click();
  }

  public getNameServiceStateElement() : ElementFinder {
    return this.nameServiceState;
  }

  public getGreetingElement() : ElementFinder {
    return this.greetingResult;
  }

}

export enum NameServiceState {
  Failure = 'failure state',
  Working = 'working state'
}

export enum GreetingResult {
  Failure = 'Fallback',
  Working = 'World!'
}
