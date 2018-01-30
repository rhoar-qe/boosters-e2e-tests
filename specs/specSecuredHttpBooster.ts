import {SecuredHttpPage,SecuredSignOnPage} from '../pages';
import {browser,protractor} from 'protractor';


// The jasmine typings are brought in via DefinitelyTyped ambient typings.
describe('Secured HTTP booster page', () => {
  xit('Greetings test with name without login', () => {
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

  xit('Test the default greeting without login', () => {
    let securedHttpBoosterPage = new SecuredHttpPage();
    let name = SecuredHttpPage.GREETINGS_DEFAULT_NAME;
    securedHttpBoosterPage.get();
    securedHttpBoosterPage.clickInvoke();
    browser.wait(protractor.ExpectedConditions.alertIsPresent(),1000);
    let alert = browser.switchTo().alert();
    expect(alert.getText()).toContain('cause: [401] Unauthorized');
    alert.accept();
  });

  it('Greetings test with name with login', () => {
    let name : string = 'Julie';
    console.log("go to th page");
    let securedHttpBoosterPage = new SecuredHttpPage();
    securedHttpBoosterPage.get();
    console.log('login');
    let logInPage = securedHttpBoosterPage.clickLogin();
    console.log("set name and password");
    logInPage.setUserNameAndPassword(SecuredSignOnPage.USERNAME,SecuredSignOnPage.PASSWORD);
    console.log('click login');
    securedHttpBoosterPage = logInPage.clickLogin();
    let EC = protractor.ExpectedConditions;
    console.log('set name');
    securedHttpBoosterPage.setName(name);
    console.log('click invoke');
    securedHttpBoosterPage.clickInvoke();
    console.log('wait to result')
    expect(securedHttpBoosterPage.getGreetingElement().getText()).toContain('Hello, ' + name);
    console.log('click logout');
    securedHttpBoosterPage.clickLogout();
    console.log("en")

  });

  xit('Test the default greeting with login', async () => {
    let securedHttpBoosterPage = new SecuredHttpPage();
    securedHttpBoosterPage.get();
    securedHttpBoosterPage.clickLogout();
    let name = SecuredHttpPage.GREETINGS_DEFAULT_NAME;
    let logInPage = securedHttpBoosterPage.clickLogin();
    logInPage.setUserNameAndPassword(SecuredSignOnPage.USERNAME,SecuredSignOnPage.PASSWORD);
    securedHttpBoosterPage = logInPage.clickLogin();
    securedHttpBoosterPage.clickInvoke();
    let EC = protractor.ExpectedConditions;
    await EC.textToBePresentInElement(securedHttpBoosterPage.getGreetingElement(),"Hello, ");

  });
});
