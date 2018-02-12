import { browser } from 'protractor';
import { AbstractAngularPage } from './abstractAngularPage'

export abstract class AbstractNonAngularPage extends AbstractAngularPage {

  public constructor(url: string) {
    super(url);
  }

  public get() {
    browser.ignoreSynchronization = false;
    browser.waitForAngularEnabled(false);
    return super.get();
  }
}
