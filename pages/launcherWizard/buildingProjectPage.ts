import {browser, element, by, protractor} from 'protractor';
import {NextStepPage} from './';

export class BuildingProjectPage  {
  nextButton = element(by.xpath('//button[@id="next"][not(@disabled)]'));

  clickNext(): NextStepPage {
    this.isErrorDivPresent();
    let EC = protractor.ExpectedConditions;
    browser.wait(EC.elementToBeClickable(this.nextButton), 20000);
    this.nextButton.click();
    return new NextStepPage();
  }

  isErrorDivPresent(): void {
    element(by.xpath("")).isElementPresent
    let errorDiv = element(by.xpath('//div[@class="alert alert-danger alert-dismissable"]'));
    expect(errorDiv.isPresent()).toBeFalsy();
  }


}
