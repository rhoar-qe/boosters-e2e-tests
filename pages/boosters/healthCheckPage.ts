import {browser, element, by, protractor, ElementFinder} from 'protractor';
import {HttpPage} from './';

export class HealthCheck extends HttpPage  {

  private stopService = element(by.id('stop'));

  public constructor () {
    super(browser.params.url.boosters.healthCheck);
  }

  public clickStopService() {
    this.clickStopService();
  }

}
