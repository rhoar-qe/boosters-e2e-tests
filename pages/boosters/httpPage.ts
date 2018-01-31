import {browser, element, by, protractor, ElementFinder} from 'protractor';
import {NonAngluarBoosterPage} from './nonAngularBoosterPage';

export class HttpPage extends NonAngluarBoosterPage {
  private nameInput = element(by.id('name'));
  private invokeButton = element(by.id('invoke'));
  private greetingResult = element(by.id('greeting-result'));

  public static readonly GREETINGS_DEFAULT_NAME = "World";

  public constructor(url : string = browser.params.url.boosters.http){
    super(url);
  }

  public setName(name: string) : any {
    return this.nameInput.sendKeys(name);
  }

  public clickInvoke() {
    return this.invokeButton.click();
  }

  protected setGreetingElement(greetingResult : ElementFinder){
    this.greetingResult = greetingResult;
  }

  public getGreetingElement(): ElementFinder {
    return this.greetingResult;
  }
}
