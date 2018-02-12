import { browser, element, by, protractor, ElementFinder } from 'protractor';
import { AbstractNonAngularPage } from '../abstractNonAngularPage';

export abstract class AbstractGreetingServicePage extends AbstractNonAngularPage {

  private invokeButton = element(by.id('invoke'));
  private greetingResult = element(by.id('greeting-result'));

  public static readonly GREETINGS_DEFAULT_NAME = "World";

  public constructor(url: string) {
    super(url);
  }

  public clickInvoke() {
    return this.invokeButton.click();
  }

  protected setGreetingElement(greetingResult: ElementFinder) {
    this.greetingResult = greetingResult;
  }

  public getGreetingElement(): ElementFinder {
    return this.greetingResult;
  }
}
