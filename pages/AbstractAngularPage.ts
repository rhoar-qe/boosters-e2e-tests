import {browser} from 'protractor';

export abstract class AbstractAngularPage {
  private readonly url: string;

  protected constructor(url: string) {
    this.url = url;
  }

  /* tslint:disable:no-reserved-keywords -- get is a contextual keyword, but also probably the best name here */
  async get(): Promise<void> {
    await browser.waitForAngularEnabled(true);
    return browser.get(this.url);
  }
  /* tslint:enable:no-reserved-keywords */
}
