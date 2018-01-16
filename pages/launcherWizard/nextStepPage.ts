import {element, by} from 'protractor';
import {DeploymentTypePage} from './'

export abstract class NextStepPage  {

  buildLink = element(by.xpath('//a[@_ngcontent-c7][contains(text(),"Take a look at your build ")]'));
  restartButton = element(by.id('restart'));

  clickStartNewMission(): DeploymentTypePage {
    this.restartButton.click();
    return new DeploymentTypePage();
  }
}
