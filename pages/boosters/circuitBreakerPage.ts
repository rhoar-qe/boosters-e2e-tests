import {browser, element, by, protractor, ElementFinder, promise} from 'protractor';
import {NonAngluarBoosterPage} from './nonAngularBoosterPage';

export class CircuitBreakerPage extends NonAngluarBoosterPage {

  private invokeButton = element(by.id('invoke'));
  private toggleButton = element(by.id('toggle'));
  private nameServiceState = element(by.xpath('//p[@id="name-state"]//span[@id="svc-state"]'));
  private greetingResult = element(by.id('greeting-result'));

  public constructor(){
    super(browser.params.url.boosters.circuitBreaker);
  }

  public get() {
    browser.ignoreSynchronization = true;
    browser.waitForAngularEnabled(false);
    super.get();
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
