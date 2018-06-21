import {browser, by, element, ElementFinder} from 'protractor';

import {AbstractGreetingServicePage} from './AbstractGreetingServicePage';

export class CachePage extends AbstractGreetingServicePage {
  private clearCache = element(by.id('clear'));
  private cacheState = element(by.id('cache-state'));

  constructor(url: string = browser.params.url.cache) {
    super(url);
  }

  async clickClear(): Promise<void> {
    return this.clearCache.click();
  }

  getCacheStateElement(cached = false): ElementFinder {
    return this.cacheState.element(by.className(cached ? 'label-info' : 'label-warning'));
  }
}
