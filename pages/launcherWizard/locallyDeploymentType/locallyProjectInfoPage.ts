import {browser, element, by, protractor} from 'protractor';
import {ProjectInfoPage} from '../projectInfoPage';
import {LocallyReviewPage} from './';

export class LocallyProjectInfoPage extends ProjectInfoPage  {

  clickNext(): LocallyReviewPage {
    this.nextButton.click();
    return new LocallyReviewPage();
  }
}
