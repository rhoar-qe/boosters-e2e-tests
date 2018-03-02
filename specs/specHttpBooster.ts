import {browser, protractor} from 'protractor';

import {HttpPage} from '../pages';

// The jasmine typings are brought in via DefinitelyTyped ambient typings.
describe('HTTP booster page', () => {
  it('Greetings test with name', () => {
    const name = 'Julie';
    const httpBoosterPage = new HttpPage();
    httpBoosterPage.get();
    httpBoosterPage.setName(name);
    httpBoosterPage.clickInvoke();
    const EC = protractor.ExpectedConditions;
    browser.wait(
        EC.textToBePresentInElement(
            httpBoosterPage.getGreetingElement(), 'Hello, ' + name),
        1000);
  });

  it('Test the default greeting', () => {
    const httpBoosterPage = new HttpPage();
    const name = HttpPage.GREETINGS_DEFAULT_NAME;
    httpBoosterPage.get();
    httpBoosterPage.clickInvoke();
    const EC = protractor.ExpectedConditions;
    browser.wait(
        EC.textToBePresentInElement(
            httpBoosterPage.getGreetingElement(), 'Hello, ' + name),
        1000);
  });
});
