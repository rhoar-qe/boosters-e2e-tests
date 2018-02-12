import {LocallyProjectInfoPage} from './';
import {RuntimePage} from '../runtimePage';

export class LocallyRuntimePage extends RuntimePage {
  clickNext(): LocallyProjectInfoPage {
    return new LocallyProjectInfoPage();
  }
}
