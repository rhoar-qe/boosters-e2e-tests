import * as fs from 'fs';
import {browser, by, element, ElementFinder, protractor} from 'protractor';

import {SecuredHttpPage} from './';

export class SecuredSignOnPage {
  private username = element(by.id('username'));
  private password = element(by.id('password'));
  private logInButton = element(by.id('kc-login'));

  private errorMessage = element(by.xpath(
      '//div[@class="alert alert-error"]/span[@class="kc-feedback-text"]'));

  static readonly USERNAME =
      browser.params.values.boosters.securedHttp.username;
  static readonly PASSWORD =
      browser.params.values.boosters.securedHttp.password;

  async setUserName(username: string): Promise<void> {
    return this.username.sendKeys(username);
  }

  async setPassword(password: string): Promise<void> {
    return this.password.sendKeys(password);
  }

  async clickLogin(): Promise<SecuredHttpPage> {
    await this.logInButton.click();
    const EC = protractor.ExpectedConditions;
    return new SecuredHttpPage();
  }

  getError(): ElementFinder {
    return this.errorMessage;
  }
}
