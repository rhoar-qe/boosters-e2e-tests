import {browser, element, by, protractor, ElementFinder} from 'protractor';
import {NonAngluarBoosterPage} from './nonAngularBoosterPage';

export class HttpPage extends NonAngluarBoosterPage {
  private nameInput = element(by.id('name'));
  private invokeButton = element(by.id('invoke'));
  private greetingResult = element(by.id('greeting-result'));

  public static readonly HTTP_GREETINGS_DEFAULT_NAME = "World";

  public constructor(){
    super(browser.params.url.boosters.http);
  }

  public get() {
    browser.ignoreSynchronization = true;
    browser.waitForAngularEnabled(false);
    super.get();
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
