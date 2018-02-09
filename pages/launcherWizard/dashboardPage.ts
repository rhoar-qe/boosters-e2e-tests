import {browser, element, by, protractor} from 'protractor';
import {DeploymentTypePage} from './';

export class DashboardPage  {
  private launchButton = element(by.className('btn btn-lg'));
  private url = browser.params.launcherUrl;

  get() {
    return browser.get(this.url);
  }

  clickLaunch(): DeploymentTypePage {
    this.launchButton.click();
    return new DeploymentTypePage();
  }
}
