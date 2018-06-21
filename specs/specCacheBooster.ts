import {browser, ExpectedConditions as EC} from 'protractor';

import {CachePage} from '../pages';

describe('Cache booster', () => {
  beforeEach(async () => {
    const page = new CachePage();
    await page.get();
    await page.clickClear();
    await browser.wait(EC.presenceOf(page.getCacheStateElement(false)), 1000);
    expect(await page.getCacheStateElement(false).getText()).toContain('No cached value');
  });

  it('Cached value expires after a while', async () => {
    const page = new CachePage();
    await page.get();
    await page.clickInvoke();
    await browser.wait(EC.presenceOf(page.getCacheStateElement(true)), 3000);  // at least 2 seconds
    expect(await page.getCacheStateElement(true).getText()).toContain('A value is cached');
    expect(await page.getGreetingElement().getText()).toContain('Hello');
    expect(await page.getGreetingElement().getText()).toContain('duration');

    await browser.wait(EC.presenceOf(page.getCacheStateElement(false)), 6000);  // at least 5 seconds
    expect(await page.getCacheStateElement(false).getText()).toContain('No cached value');
  });

  it('Value is cached for a while', async () => {
    const page = new CachePage();
    await page.get();
    await page.clickInvoke();
    await browser.wait(EC.presenceOf(page.getCacheStateElement(true)), 3000);  // at least 2 seconds
    expect(await page.getCacheStateElement(true).getText()).toContain('A value is cached');
    expect(await page.getGreetingElement().getText()).toContain('Hello');
    expect(await page.getGreetingElement().getText()).toContain('duration');
    const firstMessage = (await page.getGreetingElement().getText()).replace(/ - duration.*/g, '');

    await page.clickInvoke();
    await browser.wait(EC.textToBePresentInElement(page.getGreetingElement(), firstMessage), 1000);
    expect(await page.getGreetingElement().getText()).toContain(firstMessage);
  });
});
