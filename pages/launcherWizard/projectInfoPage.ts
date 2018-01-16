import {browser, element, by, protractor} from 'protractor';

export abstract class ProjectInfoPage  {
  runtimeVersionSelect = element(by.id('runtimeVersion'));

  nextButton = element(by.xpath('//button[@id="next"][not(@disabled)]'));

  selectVersion(version : ProjectVersion): void {
    browser.sleep(4000);
    this.runtimeVersionSelect.$('[value*='+version+']').click();
  }
}

export enum ProjectVersion {
  RHOAR = 'RHOAR',
  COMMUNITY = 'Community',
}
