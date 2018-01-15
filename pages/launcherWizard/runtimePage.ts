import {browser, element, by} from 'protractor';
import {ProjectInfoPage} from './'

export class RuntimePage  {

  //TODO write issue for add id to h3 radio button
  selectVertxDiv = element(by.xpath('//div[@id="Eclipse Vert.x"]'));

  nextButton = element(by.xpath('//button[@id="next"][not(@disabled)]'));

  selectVertx(): any {
    this.selectVertxDiv.click()
  }

  clickNext(): ProjectInfoPage {
    this.nextButton.click();
    return new ProjectInfoPage()
  }
}
