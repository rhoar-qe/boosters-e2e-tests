import {element, by} from 'protractor';
import {ReviewPage} from '../reviewPage'
import {OpenShiftBuildingProjectPage} from './';

export class OpenShiftReviewPage extends ReviewPage {

  private downloadButton = element(by.xpath('//button[@id="launch"]'));

  clickLaunch(): OpenShiftBuildingProjectPage {
    this.downloadButton.click();
    return new OpenShiftBuildingProjectPage();
  }
}
