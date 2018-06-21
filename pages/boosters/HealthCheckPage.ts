import {browser, by, element} from 'protractor';

import {HttpPage} from './HttpPage';

export class HealthCheckPage extends HttpPage {
  private stopServiceButton = element(by.id('stop'));

  constructor(url: string = browser.params.url.healthCheck) {
    super(url);
  }

  async clickStopService(): Promise<void> {
    return this.stopServiceButton.click();
  }
}
