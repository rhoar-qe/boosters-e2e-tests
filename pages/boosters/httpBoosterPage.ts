import {browser, element, by, protractor} from 'protractor';

export class HttpBoosterPage {
  private nameInput = element(by.id('name'));
  private invokeButton = element(by.id('invoke'));
  private greetingResult = element(by.id('greeting-result'));
  private url = browser.params.url.boosters.http;
  
  public static readonly DEFAULT_NAME = "World";

  public get() {
    browser.ignoreSynchronization = true;
    browser.waitForAngularEnabled(false);
    return browser.get(this.url);
  }

  public setName(name: string) : any {
    return this.nameInput.sendKeys(name);
  }

  public clickInvoke() : any {
    return this.invokeButton.click();
  }

  public validateDefaultGreeting(){
    this.validateGreeting(HttpBoosterPage.DEFAULT_NAME);
  }

  public validateGreeting(name: string): any {
    browser.wait(protractor.ExpectedConditions.textToBePresentInElement(this.greetingResult,"Hello, " + name),1000);
  }
}
