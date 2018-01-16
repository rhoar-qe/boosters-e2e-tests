import {browser, element, by} from 'protractor';
import {LauncherRuntime} from './'

export class LauncherMission  {
  //TODO write issue for add id to h3 radio button
  crudRadioButton = element(by.xpath('//mission/div[2]/div[1]/span/label/h3'));

  nextButton = element(by.xpath('//button[@id="next"][not(@disabled)]'));

  selectCRUD(): any {
    this.crudRadioButton.click()
  }

  clickNext(): LauncherRuntime {
    this.nextButton.click();
    return new LauncherRuntime();
  }
}
