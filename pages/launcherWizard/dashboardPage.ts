import {browser, element, by, protractor} from 'protractor';
import {DeploymentTypePage} from './';

export class DashboardPage  {
  lauchButton = element(by.className('btn btn-lg'));

  get() {
    console.log(browser.params);
    return browser.get('http://launchpad-nginx-my-laucher.192.168.42.199.nip.io/');
  }

  clickLauch(): DeploymentTypePage {
    this.lauchButton.click();
    return new DeploymentTypePage();
  }
}
