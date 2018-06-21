import {by, element, ElementFinder} from 'protractor';

import {SecuredHttpPage} from './SecuredHttpPage';

export class SsoLoginPage {
  private usernameInput = element(by.id('username'));
  private passwordInput = element(by.id('password'));
  private loginButton = element(by.id('kc-login'));
  private errorMessage = element(by.xpath('//div[@class="alert alert-error"]/span[@class="kc-feedback-text"]'));

  async setUserName(username: string): Promise<void> {
    return this.usernameInput.sendKeys(username);
  }

  async setPassword(password: string): Promise<void> {
    return this.passwordInput.sendKeys(password);
  }

  async clickLogin(): Promise<SecuredHttpPage> {
    await this.loginButton.click();
    return new SecuredHttpPage();
  }

  getError(): ElementFinder {
    return this.errorMessage;
  }
}
