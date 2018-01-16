import {browser, element, by, protractor} from 'protractor';
import {LauncherReview} from './';

export class LauncherProjectInfo  {
  //TODO write issue for add id to h3 radio button
  runtimeVersionSelect = element(by.id('runtimeVersion'));
  projectName = element(by.id('named'));

  nextButton = element(by.xpath('//button[@id="next"][not(@disabled)]'));

  selectVersion(version : ProjectVersion): any {
    this.runtimeVersionSelect.$('[value*='+version+']').click();
  }

  setProjectName(name : string): any{
    this.projectName.sendKeys(name);
  }

  clickNext(): LauncherReview {
    let EC = protractor.ExpectedConditions;
    browser.wait(EC.elementToBeClickable(this.nextButton), 5000);
    this.nextButton.click();
    return new LauncherReview();
  }
}

export enum ProjectVersion {
  RHOAR = 'RHOAR',
  COMMUNITY = 'Community',
}
