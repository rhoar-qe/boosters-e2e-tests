import {browser, element, by, protractor, ElementFinder} from 'protractor';

export class HttpBoosterPage {
  private nameInput = element(by.id('name'));
  private invokeButton = element(by.id('invoke'));
  private greetingResult = element(by.id('greeting-result'));

  private static readonly URL = browser.params.url.boosters.http;
  public static readonly DEFAULT_NAME = "World";

  public get() {
    browser.ignoreSynchronization = true;
    browser.waitForAngularEnabled(false);
    return browser.get(HttpBoosterPage.URL);
  }

  public setName(name: string) : any {
    return this.nameInput.sendKeys(name);
  }

  public clickInvoke() {
    return this.invokeButton.click();
  }

  public getGreetingElement(): ElementFinder {
    return this.greetingResult;
  }
}
