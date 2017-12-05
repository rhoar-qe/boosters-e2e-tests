import {browser, element, by} from 'protractor';

export class HttpBoosterPage {
  nameInput = element(by.id('name'));
  invokeButton = element(by.id('invoke'));
  greetingResult = element(by.id('greeting-result'));

  get() {
    browser.ignoreSynchronization = true;
    browser.waitForAngularEnabled(false);
    return browser.get('http://http-vertx-akoniar-htttp.a3c1.starter-us-west-1.openshiftapps.com/');
  }

  setName(name: string) : any {
    return this.nameInput.sendKeys(name);
  }

  clickInvoke() : any {
    return this.invokeButton.click();
  }

  getGreeting(): any {
    return this.greetingResult;
  }
}
