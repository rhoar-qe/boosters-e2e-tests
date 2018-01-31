import { browser, element, by, protractor, ElementFinder } from 'protractor';
import { SecuredHttpPage } from './';
import * as fs from 'fs';

export class SecuredSignOnPage {

  private username = element(by.id('username'));
  private password = element(by.id('password'));
  private logInButton = element(by.id('kc-login'));

  private errorMessage = element(by.xpath('//div[@class="alert alert-error"]/span[@class="kc-feedback-text"]'));

  public static readonly USERNAME = browser.params.values.boosters.securedHttp.username;
  public static readonly PASSWORD = browser.params.values.boosters.securedHttp.password;

  public async setUserName(username: string): Promise<void> {
    return this.username.sendKeys(username);
  }

  public async setPassword(password: string): Promise<void> {
    return this.password.sendKeys(password);
  }

  public async clickLogin(): Promise<SecuredHttpPage> {
    await this.logInButton.click();
    let EC = protractor.ExpectedConditions;
    return new SecuredHttpPage();
  }

  public getError(): ElementFinder {
    return this.errorMessage;
  }

}
