import {browser, ExpectedConditions as EC} from 'protractor';

import {HealthCheckPage} from '../pages';

describe('Health Check booster', () => {
  it('Default greeting', async () => {
    const name = HealthCheckPage.GREETINGS_DEFAULT_NAME;

    const page = new HealthCheckPage();
    await page.get();
    await page.clickInvoke();
    await browser.wait(
        EC.textToBePresentInElement(page.getGreetingElement(), page.getExceptedGreetingResult(name)), 1000);
    expect(await page.getGreetingElement().getText()).toContain(page.getExceptedGreetingResult(name));
  });

  it('Greeting with given name', async () => {
    const name = 'Julie';

    const page = new HealthCheckPage();
    await page.get();
    await page.setName(name);
    await page.clickInvoke();
    await browser.wait(
        EC.textToBePresentInElement(page.getGreetingElement(), page.getExceptedGreetingResult(name)), 1000);
    expect(await page.getGreetingElement().getText()).toContain(page.getExceptedGreetingResult(name));
  });

  it('Stop service', async () => {
    const name = HealthCheckPage.GREETINGS_DEFAULT_NAME;

    const page = new HealthCheckPage();
    await page.get();
    await page.clickStopService();
    await browser.wait(
        EC.and(
            EC.textToBePresentInElement(page.getGreetingElement(), page.getExceptedGreetingResult(name)),
            EC.textToBePresentInElement(page.getGreetingElement(), 'recovery took')),
        90_000);
    expect(await page.getGreetingElement().getText()).toContain(page.getExceptedGreetingResult(name));
    expect(await page.getGreetingElement().getText()).toContain('recovery took');
  });
});
