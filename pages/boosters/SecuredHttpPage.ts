import {browser, by, element} from 'protractor';

import {HttpPage} from './HttpPage';
import {SsoLoginPage} from './SsoLoginPage';

export class SecuredHttpPage extends HttpPage {
  private loginButton = element(by.xpath('//button[@id="login"]'));
  private logoutButton = element(by.id('logout'));

  constructor(url: string = browser.params.url.securedHttp) {
    super(url);
    super.setGreetingElement(element(by.id('result')));
  }

  async clickLogin(): Promise<SsoLoginPage> {
    await this.loginButton.click();
    return new SsoLoginPage();
  }

  async clickLogout(): Promise<void> {
    return this.logoutButton.click();
  }
}
