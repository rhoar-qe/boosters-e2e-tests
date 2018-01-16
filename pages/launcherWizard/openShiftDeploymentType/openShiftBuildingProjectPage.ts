import {browser, element, by, protractor} from 'protractor';
import {OpenShiftNextStepPage} from './';

export class OpenShiftBuildingProjectPage  {
  nextButton = element(by.xpath('//button[@id="next"][not(@disabled)]'));

  clickNext(): OpenShiftNextStepPage {
    this.isErrorDivPresent();
    let EC = protractor.ExpectedConditions;
    browser.wait(EC.elementToBeClickable(this.nextButton), 50000);
    this.nextButton.click();
    return new OpenShiftNextStepPage();
  }

  isErrorDivPresent(): void {
    let errorDiv = element(by.xpath('//div[@class="alert alert-danger alert-dismissable"]'));
    expect(errorDiv.isPresent()).toBeFalsy();
  }


}
