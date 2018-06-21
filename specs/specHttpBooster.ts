import {browser, ExpectedConditions as EC} from 'protractor';

import {HttpPage} from '../pages';

describe('HTTP booster', () => {
  it('Default greeting', async () => {
    const name = HttpPage.GREETINGS_DEFAULT_NAME;

    const page = new HttpPage();
    await page.get();
    await page.clickInvoke();
    await browser.wait(
        EC.textToBePresentInElement(page.getGreetingElement(), page.getExceptedGreetingResult(name)), 1000);
    expect(await page.getGreetingElement().getText()).toContain(page.getExceptedGreetingResult(name));
  });

  it('Greeting with given name', async () => {
    const name = 'Julie';

    const page = new HttpPage();
    await page.get();
    await page.setName(name);
    await page.clickInvoke();
    await browser.wait(
        EC.textToBePresentInElement(page.getGreetingElement(), page.getExceptedGreetingResult(name)), 1000);
    expect(await page.getGreetingElement().getText()).toContain(page.getExceptedGreetingResult(name));
  });
});
