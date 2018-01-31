import {SecuredHttpPage,SecuredSignOnPage} from '../pages';
import {browser,protractor} from 'protractor';

// The jasmine typings are brought in via DefinitelyTyped ambient typings.
describe('Secured HTTP booster page', () => {
  it('Greetings test with name without login', () => {
    let name : string = 'Julie';
    let securedHttpBoosterPage = new SecuredHttpPage();
    securedHttpBoosterPage.get();
    securedHttpBoosterPage.setName(name);
    securedHttpBoosterPage.clickInvoke();
    browser.wait(protractor.ExpectedConditions.alertIsPresent(),1000);
    let alert = browser.switchTo().alert();
    expect(alert.getText()).toContain('cause: [401] Unauthorized');
    alert.accept();
  });

  it('The default greeting without login', () => {
    let securedHttpBoosterPage = new SecuredHttpPage();
    let name = SecuredHttpPage.GREETINGS_DEFAULT_NAME;
    securedHttpBoosterPage.get();
    securedHttpBoosterPage.clickInvoke();
    browser.wait(protractor.ExpectedConditions.alertIsPresent(),1000);
    let alert = browser.switchTo().alert();
    expect(alert.getText()).toContain('cause: [401] Unauthorized');
    alert.accept();
  });

  it('Greetings test with name with login', async () => {
    let name : string = 'Julie';
    let securedHttpBoosterPage = new SecuredHttpPage();
    await securedHttpBoosterPage.get();
    let logInPage = await securedHttpBoosterPage.clickLogin();
    await logInPage.setUserName(SecuredSignOnPage.USERNAME)
    await logInPage.setPassword(SecuredSignOnPage.PASSWORD);
    securedHttpBoosterPage = await logInPage.clickLogin();
    let EC = protractor.ExpectedConditions;
    await securedHttpBoosterPage.setName(name);
    await securedHttpBoosterPage.clickInvoke();
    await expect(securedHttpBoosterPage.getGreetingElement().getText()).toContain('Hello, ' + name);
    securedHttpBoosterPage.clickLogout();
  });

  it('The default greeting with login', async () => {
    let securedHttpBoosterPage = new SecuredHttpPage();
    await securedHttpBoosterPage.get();
    await securedHttpBoosterPage.clickLogout();
    let name = SecuredHttpPage.GREETINGS_DEFAULT_NAME;
    let logInPage = await securedHttpBoosterPage.clickLogin();
    await logInPage.setUserName(SecuredSignOnPage.USERNAME)
    await logInPage.setPassword(SecuredSignOnPage.PASSWORD);
    securedHttpBoosterPage = await logInPage.clickLogin();
    await securedHttpBoosterPage.clickInvoke();
    let EC = protractor.ExpectedConditions;
    await EC.textToBePresentInElement(securedHttpBoosterPage.getGreetingElement(),"Hello, " + name);
  });

  it('Try to login with bad username and password', async () => {
    let securedHttpBoosterPage = new SecuredHttpPage();
    await securedHttpBoosterPage.get();
    await securedHttpBoosterPage.clickLogout();
    let name = SecuredHttpPage.GREETINGS_DEFAULT_NAME;
    let logInPage = await securedHttpBoosterPage.clickLogin();
    await logInPage.setUserName(SecuredSignOnPage.USERNAME+'a')
    await logInPage.setPassword(SecuredSignOnPage.PASSWORD);
    await logInPage.clickLogin();
    let EC = protractor.ExpectedConditions;
    await browser.wait(EC.textToBePresentInElement(logInPage.getError(),'Invalid username or password.'),1000);
  });

});
