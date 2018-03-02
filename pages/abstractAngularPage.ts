import {browser, by, element, ElementFinder} from 'protractor';
export abstract class AbstractAngularPage {
  private readonly URL;

  constructor(url: string) {
    this.URL = url;
  }
  async get(): Promise<void> {
    return browser.get(this.URL);
  }
}
