import {browser, element, by} from 'protractor';
import {MissionPage} from './';

export class DeploymentTypePage  {
  openshiftOnlineButton = element(by.buttonText('Use OpenShift Online'));

  clickLauch(): MissionPage {
    this.openshiftOnlineButton.click();
    return new MissionPage();
  }
}
