import {OpenShiftProjectInfoPage} from './';
import {RuntimePage} from '../runtimePage';

export class OpenShiftRuntimePage extends RuntimePage {
  clickNext(): OpenShiftProjectInfoPage {
    this.nextButton.click();
    return new OpenShiftProjectInfoPage();
  }
}
