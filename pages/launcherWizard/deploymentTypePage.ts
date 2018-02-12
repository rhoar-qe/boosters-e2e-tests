import {browser, element, by} from 'protractor';
import {LocallyMissionPage} from './locallyDeploymentType';
import {OpenShiftMissionPage} from './openShiftDeploymentType';

export class DeploymentTypePage  {

  //TODO write issue for add id to buttons
  openshiftOnlineButton = element(by.buttonText('Use OpenShift Online'));
  locallyButton = element(by.buttonText('I will build and run locally'));

  clickUseOpenShift(): OpenShiftMissionPage { 
    this.openshiftOnlineButton.click();
    return new OpenShiftMissionPage();
  }

  clickRunAndBuildLocally(): LocallyMissionPage {
    this.locallyButton.click();
    return new LocallyMissionPage();
  }
}
