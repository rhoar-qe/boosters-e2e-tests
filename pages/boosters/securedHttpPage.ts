import {browser, by, element, ElementFinder, protractor} from 'protractor';

import {HttpPage, SecuredSignOnPage} from './';

export class SecuredHttpPage extends HttpPage {
  private loginButton = element(by.xpath('//button[@id="login"]'));
  private logoutButton = element(by.id('logout'));

  constructor() {
    super(browser.params.url.boosters.securedHttp);
    super.setGreetingElement(element(by.id('result')));
  }

  async clickLogin(): Promise<SecuredSignOnPage> {
    await this.loginButton.click();
    return new SecuredSignOnPage();
  }

  async clickLogout(): Promise<void> {
    return this.logoutButton.click();
  }
}
