import { ConfigMapPage } from '../pages';
import { browser, protractor } from 'protractor';

// The jasmine typings are brought in via DefinitelyTyped ambient typings.
describe('ConfigMap booster page', () => {
  it('Greetings test with name', () => {
    let name: string = 'Julie';
    let configMapPage = new ConfigMapPage();
    configMapPage.get();
    configMapPage.get();
    configMapPage.setName(name);
    configMapPage.clickInvoke();
    let EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement(configMapPage.getGreetingElement(), configMapPage.getExceptedGreetingResult(name)), 1000);
  });

  it('Test the default greeting', () => {
    let configMapPage = new ConfigMapPage();
    configMapPage.get();
    let name = ConfigMapPage.GREETINGS_DEFAULT_NAME;
    configMapPage.get();
    configMapPage.clickInvoke();
    let EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement(configMapPage.getGreetingElement(), configMapPage.getExceptedGreetingResult(name)), 1000);
  });
});
