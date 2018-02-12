import { CircuitBreakerPage, NameServiceState, GreetingResult } from '../pages';
import { browser, protractor } from 'protractor';

// The jasmine typings are brought in via DefinitelyTyped ambient typings.
describe('Circuit breaker booster page', () => {

  it('Click invoke without toggle', () => {
    let circuitBreakerPage = new CircuitBreakerPage();
    circuitBreakerPage.get();
    let EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement(circuitBreakerPage.getNameServiceStateElement(), NameServiceState.Working), 1000);
    circuitBreakerPage.clickInvoke();
    browser.wait(EC.textToBePresentInElement(circuitBreakerPage.getGreetingElement(), GreetingResult.Working), 1000);
  });

  it('Click invoke after click toggle and return to previous state', () => {
    let circuitBreakerPage = new CircuitBreakerPage();
    circuitBreakerPage.get();
    let EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement(circuitBreakerPage.getNameServiceStateElement(), NameServiceState.Working), 1000);
    circuitBreakerPage.clickToggle();
    browser.wait(EC.textToBePresentInElement(circuitBreakerPage.getNameServiceStateElement(), NameServiceState.Failure), 1000);
    circuitBreakerPage.clickInvoke();
    browser.wait(EC.textToBePresentInElement(circuitBreakerPage.getGreetingElement(), GreetingResult.Failure), 1000);
    circuitBreakerPage.clickToggle();
    browser.wait(EC.textToBePresentInElement(circuitBreakerPage.getNameServiceStateElement(), NameServiceState.Working), 1000);
    circuitBreakerPage.clickInvoke();
    browser.wait(EC.textToBePresentInElement(circuitBreakerPage.getGreetingElement(), GreetingResult.Working), 1000);
  });
});
