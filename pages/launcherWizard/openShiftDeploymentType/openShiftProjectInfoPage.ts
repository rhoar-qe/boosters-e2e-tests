import {browser, element, by, protractor} from 'protractor';
import {OpenShiftReviewPage} from './';
import {ProjectInfoPage, ProjectVersion} from '../projectInfoPage';

export class OpenShiftProjectInfoPage extends ProjectInfoPage   {
  projectName = element(by.id('named'));

  setProjectName(name : string): any{
    this.projectName.sendKeys(name);
  }

  clickNext(): OpenShiftReviewPage {
    let EC = protractor.ExpectedConditions;
    browser.wait(EC.elementToBeClickable(this.nextButton), 5000);
    this.nextButton.click();
    return new OpenShiftReviewPage();
  }
}
