import {browser, element, by} from 'protractor';
import {LaucherDeploymentType} from './'

export class LauncherNextStep  {

  //TODO write issue for add id to h3 radio button
  buildLink = element(by.xpath('//a[@_ngcontent-c7][contains(text(),"Take a look at your build ")]'));

  restartButton = element(by.id('restart'));

  clickBuildLink(): any {
    this.buildLink.click()
  }

  clickNext(): LaucherDeploymentType {
    this.restartButton.click();
    return new LaucherDeploymentType();
  }
}
