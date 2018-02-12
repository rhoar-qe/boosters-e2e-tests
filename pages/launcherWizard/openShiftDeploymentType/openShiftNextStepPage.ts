import {browser, element, by} from 'protractor';
import {DeploymentTypePage} from '../'
import {NextStepPage} from '../nextStepPage';

export class OpenShiftNextStepPage extends NextStepPage  {

  buildLink = element(by.xpath('//a[@_ngcontent-c7][contains(text(),"Take a look at your build ")]'));

  clickBuildLink(): any {
    this.buildLink.click()
  }
}
