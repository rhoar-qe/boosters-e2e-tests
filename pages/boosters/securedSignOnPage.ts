import {browser, element, by, protractor, ElementFinder} from 'protractor';
import {SecuredHttpPage} from './';

export class SecuredSignOnPage {

  private username = element(by.id('username'));
  private password = element(by.id('password'));
  private logInButton = element(by.id('login'));

  public setUserNameAndPassword(userName : string, password : string){
    this.setUserName(userName);
    this.setUserName(password);
  }

  public setUserName (username : string){
    this.username.sendKeys(username);
  }

  public setPassword (password : string){
    this.password.sendKeys(password);
  }

  public clickLogin() : SecuredHttpPage {
    this.logInButton.click()
    return new SecuredHttpPage();
  }

}
