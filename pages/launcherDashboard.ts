import {browser, element, by} from 'protractor';
import {LaucherDeploymentType} from './';

export class LauncherDashboard  {
  lauchButton = element(by.className('btn btn-lg'));

  get() {
    return browser.get('http://launchpad-nginx-my-laucher.192.168.42.199.nip.io/');
  }

  clickLauch(): LaucherDeploymentType {
    this.lauchButton.click();
    return new LaucherDeploymentType();
  }
}
