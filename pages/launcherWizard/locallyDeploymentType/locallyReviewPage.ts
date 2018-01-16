import {browser, element, by, protractor} from 'protractor';
import {ReviewPage} from '../reviewPage'
import {LocallyNextStepPage} from './';

export class LocallyReviewPage extends ReviewPage {

  private launchButton = element(by.xpath('//button[@id="launch"]'));

  clickNext(): LocallyNextStepPage {
    this.launchButton.click();
    return new LocallyNextStepPage();
  }
}
