import {browser} from 'protractor';
import {AbstractAngularPage} from './abstractAngularPage';

export abstract class AbstractNonAngularPage extends AbstractAngularPage {
  constructor(url: string) {
    super(url);
  }

  get() {
    browser.ignoreSynchronization = false;
    browser.waitForAngularEnabled(false);
    return super.get();
  }
}
