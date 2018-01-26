import {browser, element, by, protractor} from 'protractor';
import {DeploymentTypePage} from './';

export class DashboardPage  {
  private lauchButton = element(by.className('btn btn-lg'));
  private url = browser.params.launcherUrl;

  get() {
    return browser.get(this.url);
  }

  clickLauch(): DeploymentTypePage {
    this.lauchButton.click();
    return new DeploymentTypePage();
  }
}