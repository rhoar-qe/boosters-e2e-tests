import {browser, protractor} from 'protractor';

import {ConfigMapPage} from '../pages';

// The jasmine typings are brought in via DefinitelyTyped ambient typings.
describe('ConfigMap booster page', () => {
  it('Greetings test with name', () => {
    const name = 'Julie';
    const configMapPage = new ConfigMapPage();
    configMapPage.get();
    configMapPage.get();
    configMapPage.setName(name);
    configMapPage.clickInvoke();
    const EC = protractor.ExpectedConditions;
    browser.wait(
        EC.textToBePresentInElement(
            configMapPage.getGreetingElement(),
            configMapPage.getExceptedGreetingResult(name)),
        1000);
  });

  it('Test the default greeting', () => {
    const configMapPage = new ConfigMapPage();
    configMapPage.get();
    const name = ConfigMapPage.GREETINGS_DEFAULT_NAME;
    configMapPage.get();
    configMapPage.clickInvoke();
    const EC = protractor.ExpectedConditions;
    browser.wait(
        EC.textToBePresentInElement(
            configMapPage.getGreetingElement(),
            configMapPage.getExceptedGreetingResult(name)),
        1000);
  });
});
