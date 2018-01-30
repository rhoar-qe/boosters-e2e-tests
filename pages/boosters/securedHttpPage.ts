import {browser, element, by, protractor, ElementFinder} from 'protractor';
import {HttpPage} from './';

export class SecuredHttpPage extends HttpPage  {

  private loginButton = element(by.id('login'));
  private logoutButton = element(by.id('logout'));

  public constructor () {
    super(browser.params.url.boosters.healthCheck);
  }


}
