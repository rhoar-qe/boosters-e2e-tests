import {browser, element, by, protractor} from 'protractor';
import {LauncherProjectInfo} from './';

export class LauncherBuildingProject  {
  nextButton = element(by.xpath('//button[@id="next"][not(@disabled)]'));
  //TODO write issue for add id to h3 radio button


  clickNext(): void {
    this.isErrorDivPresent();
    let EC = protractor.ExpectedConditions;
    browser.wait(EC.elementToBeClickable(this.nextButton), 20000);
    this.nextButton.click();
  }

  isErrorDivPresent(): void {
    element(by.xpath("")).isElementPresent
    let errorDiv = element(by.xpath('//div[@class="alert alert-danger alert-dismissable"]'));
    expect(errorDiv.isPresent()).toBeFalsy();
  }


}
