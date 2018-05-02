import {browser, protractor} from 'protractor';

import {CachePage} from '../pages';

describe('Cache boosters spec', () => {
  beforeEach(() => {
    const cachePage = new CachePage();
    cachePage.get();
    cachePage.clickClear();
  });

  it('Auto clear cache', () => {
    const cachePage = new CachePage();
    cachePage.get();
    cachePage.clickInvoke();
    const EC = protractor.ExpectedConditions;
    browser.wait(EC.presenceOf(cachePage.getCacheStateElement(true)), 5000);
    browser.wait(EC.presenceOf(cachePage.getCacheStateElement(false)), 6000);
  });

  it('Stored cache value', () => {
    const cachePage = new CachePage();
    cachePage.get();
    cachePage.clickInvoke();
    const EC = protractor.ExpectedConditions;
    browser.wait(EC.presenceOf(cachePage.getCacheStateElement(true)), 5000);
    browser.wait(
        EC.textToBePresentInElement(
            cachePage.getGreetingElement(), '{"message":"Hello '),
        1000);
  });
});