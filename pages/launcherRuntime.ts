import {browser, element, by} from 'protractor';
import {LauncherProjectInfo} from './'

export class LauncherRuntime  {

  //TODO write issue for add id to h3 radio button
  selectVertxDiv = element(by.xpath('//div[@id="Eclipse Vert.x"]'));

  nextButton = element(by.xpath('//button[@id="next"][not(@disabled)]'));

  selectVertx(): any {
    this.selectVertxDiv.click()
  }

  clickNext(): LauncherProjectInfo {
    this.nextButton.click();
    return new LauncherProjectInfo()
  }
}
