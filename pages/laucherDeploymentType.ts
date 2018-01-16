import {browser, element, by} from 'protractor';
import {LauncherMission} from './';

export class LaucherDeploymentType  {
  openshiftOnlineButton = element(by.buttonText('Use OpenShift Online'));

  clickLauch(): LauncherMission {
    this.openshiftOnlineButton.click();
    return new LauncherMission();
  }
}
