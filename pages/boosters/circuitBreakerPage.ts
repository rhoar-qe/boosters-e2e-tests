import {browser, element, by, protractor, ElementFinder} from 'protractor';
import {AbstractNonAngularPage} from '../abstractNonAngularPage';

export class CircuitBreakerPage extends AbstractNonAngularPage {

  private invokeButton = element(by.id('invoke'));
  private toggleButton = element(by.id('toggle'));
  private nameServiceState = element(by.xpath('//p[@id="name-state"]//span[@id="svc-state"]'));
  private greetingResult = element(by.id('greeting-result'));

  public constructor(){
    super(browser.params.url.boosters.circuitBreaker);
  }

  public async clickToggle() : Promise<void> {
    return this.toggleButton.click();
  }

  public async clickInvoke() : Promise<void>{
    return this.invokeButton.click();
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
