import {browser, ExpectedConditions as EC} from 'protractor';

import {CircuitBreakerPage, GreetingResult, NameServiceState} from '../pages';

describe('Circuit Breaker booster', () => {
  beforeEach(async () => {
    const page = new CircuitBreakerPage();
    await page.get();
    await browser.wait(EC.presenceOf(page.getNameServiceStateElement()), 1000);
    const text = await page.getNameServiceStateElement().getText();
    if (text === NameServiceState.Failure) {
      await page.clickToggle();
      await browser.wait(
          EC.textToBePresentInElement(page.getNameServiceStateElement(), NameServiceState.Working), 1000);
    }
    expect(await page.getNameServiceStateElement().getText()).toContain(NameServiceState.Working);
  });

  it('Name service OK', async () => {
    const page = new CircuitBreakerPage();
    await page.clickInvoke();
    await browser.wait(EC.textToBePresentInElement(page.getGreetingElement(), GreetingResult.Working), 1000);
    expect(await page.getGreetingElement().getText()).toContain(GreetingResult.Working);
  });

  it('Name service turned off and on again', async () => {
    const page = new CircuitBreakerPage();
    await page.clickToggle();
    await browser.wait(EC.textToBePresentInElement(page.getNameServiceStateElement(), NameServiceState.Failure), 1000);
    expect(await page.getNameServiceStateElement().getText()).toContain(NameServiceState.Failure);

    await page.clickInvoke();
    await browser.wait(EC.textToBePresentInElement(page.getGreetingElement(), GreetingResult.Failure), 1000);
    expect(await page.getGreetingElement().getText()).toContain(GreetingResult.Failure);

    await page.clickClear();
    await browser.wait(
        EC.and(
            EC.not(EC.textToBePresentInElement(page.getGreetingElement(), GreetingResult.Working)),
            EC.not(EC.textToBePresentInElement(page.getGreetingElement(), GreetingResult.Failure))),
        1000);
    expect(await page.getGreetingElement().getText()).toEqual('');

    await page.clickToggle();
    await browser.wait(EC.textToBePresentInElement(page.getNameServiceStateElement(), NameServiceState.Working), 1000);
    expect(await page.getNameServiceStateElement().getText()).toContain(NameServiceState.Working);

    await page.clickInvoke();
    await browser.wait(EC.textToBePresentInElement(page.getGreetingElement(), GreetingResult.Working), 1000);
    expect(await page.getGreetingElement().getText()).toContain(GreetingResult.Working);
  });
});
