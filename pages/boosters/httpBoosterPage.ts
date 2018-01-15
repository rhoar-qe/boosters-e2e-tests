import {browser, element, by} from 'protractor';

export class HttpBoosterPage {
  nameInput = element(by.id('name'));
  invokeButton = element(by.id('invoke'));
  greetingResult = element(by.id('greeting-result'));

  get() {
    browser.pause();
    browser.ignoreSynchronization = true;
    browser.waitForAngularEnabled(false);
    return browser.get('http://http-vertx-anonymous-http.192.168.42.199.nip.io');
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
