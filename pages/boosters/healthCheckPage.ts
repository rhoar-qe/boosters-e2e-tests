import {browser, by, element, ElementFinder, protractor} from 'protractor';

import {HttpPage} from './';

export class HealthCheck extends HttpPage {
  private stopService = element(by.id('stop'));

  constructor() {
    super(browser.params.url.boosters.healthCheck);
  }

  async clickStopService(): Promise<void> {
    return this.stopService.click();
  }
}
