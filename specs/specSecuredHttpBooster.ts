import {browser, ExpectedConditions as EC} from 'protractor';

import {SecuredHttpPage} from '../pages';

const username = 'alice';
const password = 'password';

describe('Secured HTTP booster', () => {
  it('Default greeting, without login', async () => {
    const name = SecuredHttpPage.GREETINGS_DEFAULT_NAME;

    const page = new SecuredHttpPage();
    await page.get();
    await page.clickInvoke();
    await browser.wait(EC.alertIsPresent(), 1000);
    const alert = browser.switchTo().alert();
    expect(await alert.getText()).toContain('cause: [401] Unauthorized');
    await alert.accept();
  });

  it('Greeting with given name, without login', async () => {
    const name = 'Julie';

    const page = new SecuredHttpPage();
    await page.get();
    await page.setName(name);
    await page.clickInvoke();
    await browser.wait(EC.alertIsPresent(), 1000);
    const alert = browser.switchTo().alert();
    expect(await alert.getText()).toContain('cause: [401] Unauthorized');
    await alert.accept();
  });

  it('Default greeting, with login', async () => {
    const name = SecuredHttpPage.GREETINGS_DEFAULT_NAME;

    let page = new SecuredHttpPage();
    await page.get();
    const loginPage = await page.clickLogin();
    await loginPage.setUserName(username);
    await loginPage.setPassword(password);
    page = await loginPage.clickLogin();
    await page.clickInvoke();
    await browser.wait(EC.textToBePresentInElement(page.getGreetingElement(), `Hello, ${name}`));
    expect(await page.getGreetingElement().getText()).toContain(`Hello, ${name}`);
    await page.clickLogout();
  });

  it('Greeting with given name, with login', async () => {
    const name = 'Julie';

    let page = new SecuredHttpPage();
    await page.get();
    const loginPage = await page.clickLogin();
    await loginPage.setUserName(username);
    await loginPage.setPassword(password);
    page = await loginPage.clickLogin();
    await page.setName(name);
    await page.clickInvoke();
    await browser.wait(EC.textToBePresentInElement(page.getGreetingElement(), `Hello, ${name}`));
    expect(await page.getGreetingElement().getText()).toContain(`Hello, ${name}`);
    await page.clickLogout();
  });

  it('Login with invalid username and password', async () => {
    const name = SecuredHttpPage.GREETINGS_DEFAULT_NAME;

    const page = new SecuredHttpPage();
    await page.get();
    const loginPage = await page.clickLogin();
    await loginPage.setUserName(`a${username}a`);
    await loginPage.setPassword(`a${password}a`);
    await loginPage.clickLogin();
    await browser.wait(EC.textToBePresentInElement(loginPage.getError(), 'Invalid username or password'), 1000);
    expect(await loginPage.getError().getText()).toContain('Invalid username or password');
  });
});
