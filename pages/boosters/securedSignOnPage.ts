import {browser, element, by, protractor, ElementFinder} from 'protractor';
import {SecuredHttpPage} from './';
import * as fs from 'fs';

export class SecuredSignOnPage {

  private username = element(by.id('username'));
  private password = element(by.id('password'));
  private logInButton = element(by.id('kc-login'));

  public static readonly USERNAME = browser.params.values.boosters.securedHttp.username;
  public static readonly PASSWORD = browser.params.values.boosters.securedHttp.password;

  public setUserNameAndPassword(userName : string, password : string){
    this.setUserName(userName);
    this.setPassword(password);
  }

  public setUserName (username : string){
    this.username.sendKeys(username);
  }

  public setPassword (password : string){
    this.password.sendKeys(password);
  }

  public clickLogin() : SecuredHttpPage {
    this.logInButton.click();
    return new SecuredHttpPage();
  }

}
