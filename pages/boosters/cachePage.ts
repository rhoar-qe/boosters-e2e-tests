import {browser, by, element, ElementFinder, protractor} from 'protractor';

import {AbstractGreetingServicePage} from './abstractGreetingServicePage';

export class CachePage extends AbstractGreetingServicePage {
  private clearCache = element(by.id('clear'));
  private cacheState = element(by.id('cache-state'));

  constructor() {
    super(browser.params.url.boosters.cache);
  }

  async clickClear(): Promise<void> {
    return this.clearCache.click();
  }

  getCacheStateElement(cached = false): ElementFinder {
    if (cached) {
      return this.cacheState.element(by.className('label-info'));
    }
    return this.cacheState.element(by.className('label-warning'));
  }
}