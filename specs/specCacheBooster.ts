import {browser, ExpectedConditions as EC} from 'protractor';

import {CachePage} from '../pages';

// Computing a non-cached value takes (a little bit more than) 2 seconds.
// Cache expiration time is 5 seconds.
// The web page polls the cache state every 1 second.
//
// The timeouts in these tests are computed from that:
// - 2 seconds to go from unknown state to non-cached state: 1 sec for polling + 1 sec of wiggle room
// - 10 seconds to go from non-cached to cached state: 2 secs for computation + 1 sec for polling + 7 sec of wiggle room
// - 7 seconds to go from cached to non-cached state: 5 secs for expiration + 1 sec for polling + 1 sec of wiggle room

describe('Cache booster', () => {
  beforeEach(async () => {
    const page = new CachePage();
    await page.get();
    await browser.wait(
        EC.or(
            EC.presenceOf(page.getCacheStateElement(false)),
            EC.presenceOf(page.getCacheStateElement(true)),
        ),
        1000,
    );
    await page.clickClear();
    await browser.wait(EC.presenceOf(page.getCacheStateElement(false)), 2000);
    expect(await page.getCacheStateElement(false).getText()).toContain('No cached value');
  });

  it('Cached value expires after a while', async () => {
    const page = new CachePage();
    await page.clickInvoke();
    await browser.wait(EC.presenceOf(page.getCacheStateElement(true)), 10000);
    expect(await page.getCacheStateElement(true).getText()).toContain('A value is cached');
    expect(await page.getGreetingElement().getText()).toContain('Hello');
    expect(await page.getGreetingElement().getText()).toContain('duration');

    await browser.wait(EC.presenceOf(page.getCacheStateElement(false)), 7000);
    expect(await page.getCacheStateElement(false).getText()).toContain('No cached value');
  });

  it('Value is cached for a while', async () => {
    const page = new CachePage();
    await page.clickInvoke();
    await browser.wait(EC.presenceOf(page.getCacheStateElement(true)), 10000);
    expect(await page.getCacheStateElement(true).getText()).toContain('A value is cached');
    expect(await page.getGreetingElement().getText()).toContain('Hello');
    expect(await page.getGreetingElement().getText()).toContain('duration');
    const firstMessage = (await page.getGreetingElement().getText()).replace(/ - duration.*/g, '');

    await page.clickInvoke();
    await browser.wait(EC.textToBePresentInElement(page.getGreetingElement(), firstMessage), 1000);
    expect(await page.getGreetingElement().getText()).toContain(firstMessage);
  });
});
