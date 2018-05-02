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

  it('Stored cache value', async () => {
    const cachePage = new CachePage();
    await cachePage.get();
    await cachePage.clickInvoke();
    const EC = protractor.ExpectedConditions;
    await browser.wait(
        EC.presenceOf(cachePage.getCacheStateElement(true)), 5000);
    await browser.wait(
        EC.textToBePresentInElement(
            cachePage.getGreetingElement(), '{"message":"Hello '),
        1000);
    const generatedMessage = await cachePage.getGreetingElement().getText();
    await cachePage.clickInvoke();
    await browser.wait(
        EC.textToBePresentInElement(
            cachePage.getGreetingElement(),
            generatedMessage.replace(/ - duration: .*/g, '')),
        1000);
  });
});