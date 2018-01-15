import {browser, element, by} from 'protractor';
import {RuntimePage} from './'

export class MissionPage  {
  //TODO write issue for add id to h3 radio button
  crudRadioButton = element(by.xpath('//mission/div[2]/div[1]/span/label/h3'));

  nextButton = element(by.xpath('//button[@id="next"][not(@disabled)]'));

  selectCRUD(): any {
    this.crudRadioButton.click()
  }

  clickNext(): RuntimePage {
    this.nextButton.click();
    return new RuntimePage();
  }
}
