import {browser, protractor} from 'protractor';

import {HealthCheck} from '../pages';

// The jasmine typings are brought in via DefinitelyTyped ambient typings.
describe('Health check booster page', () => {
  it('Greetings test with name', () => {
    const name = 'Julie';
    const healthCheckPage = new HealthCheck();
    healthCheckPage.get();
    healthCheckPage.setName(name);
    healthCheckPage.clickInvoke();
    const EC = protractor.ExpectedConditions;
    browser.wait(
        EC.textToBePresentInElement(
            healthCheckPage.getGreetingElement(), 'Hello, ' + name),
        1000);
  });

  it('Test the default greeting', () => {
    const healthCheckPage = new HealthCheck();
    healthCheckPage.get();
    const name = HealthCheck.GREETINGS_DEFAULT_NAME;
    healthCheckPage.clickInvoke();
    const EC = protractor.ExpectedConditions;
    browser.wait(
        EC.textToBePresentInElement(
            healthCheckPage.getGreetingElement(), 'Hello, ' + name),
        1000);
  });

  it('Test the stop service', () => {
    const healthCheckPage = new HealthCheck();
    healthCheckPage.get();
    healthCheckPage.clickStopService();
    const name = HealthCheck.GREETINGS_DEFAULT_NAME;
    const EC = protractor.ExpectedConditions;
    browser.wait(
        EC.textToBePresentInElement(
            healthCheckPage.getGreetingElement(), 'Hello, ' + name),
        80000);
  });
});
