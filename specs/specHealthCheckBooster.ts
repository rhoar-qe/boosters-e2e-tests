import {HealthCheck} from '../pages';
import {browser,protractor} from 'protractor';

// The jasmine typings are brought in via DefinitelyTyped ambient typings.
describe('Health check booster page', () => {
  it('Greetings test with name', () => {
    let name : string = 'Julie';
    let healthCheckPage = new HealthCheck();
    healthCheckPage.get();
    healthCheckPage.setName(name);
    healthCheckPage.clickInvoke();
    let EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement(healthCheckPage.getGreetingElement(),"Hello, " + name),1000);
  });

  it('Test the default greeting', () => {
    let healthCheckPage = new HealthCheck();
    healthCheckPage.get();
    let name = HealthCheck.GREETINGS_DEFAULT_NAME;
    healthCheckPage.clickInvoke();
    let EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement(healthCheckPage.getGreetingElement(),"Hello, " + name),1000);
  });

  it('Test the stop service', () => {
    let healthCheckPage = new HealthCheck();
    healthCheckPage.get();
    healthCheckPage.clickStopService();
    let name = HealthCheck.GREETINGS_DEFAULT_NAME;
    let EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement(healthCheckPage.getGreetingElement(),"Hello, " + name),50000);
  });
});
