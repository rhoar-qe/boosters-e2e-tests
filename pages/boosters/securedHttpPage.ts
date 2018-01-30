import {browser, element, by, protractor, ElementFinder} from 'protractor';
import {HttpPage, SecuredSignOnPage} from './';

export class SecuredHttpPage extends HttpPage  {

  private loginButton = element(by.xpath('//button[@id="login"]'));
  private logoutButton = element(by.id('logout'));

  public constructor () {
    super(browser.params.url.boosters.securedHttp);
  }

  public clickLogin() : SecuredSignOnPage {
    this.loginButton.click();
    browser.getCurrentUrl().then(url => console.log(url));
    return new SecuredSignOnPage();
  }

  public clickLogout() {
    this.logoutButton.click();
  }

}
