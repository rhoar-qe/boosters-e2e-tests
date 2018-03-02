import {browser, protractor} from 'protractor';

import {CircuitBreakerPage, GreetingResult, NameServiceState} from '../pages';

describe('Circuit breaker booster page', () => {
  const EC = protractor.ExpectedConditions;

  beforeEach(async () => {
    const circuitBreakerPage = new CircuitBreakerPage();
    await circuitBreakerPage.get();
    const text =
        await circuitBreakerPage.getNameServiceStateElement().getText();
    if (text === NameServiceState.Failure) {
      await circuitBreakerPage.clickToggle();
      browser.wait(
          EC.textToBePresentInElement(
              circuitBreakerPage.getNameServiceStateElement(),
              NameServiceState.Working),
          1000);
    }
  });

  it('Click invoke without toggle', () => {
    const circuitBreakerPage = new CircuitBreakerPage();
    circuitBreakerPage.get();
    browser.wait(
        EC.textToBePresentInElement(
            circuitBreakerPage.getNameServiceStateElement(),
            NameServiceState.Working),
        1000);
    browser.wait(circuitBreakerPage.getGreetingElement().isPresent(), 1000);
    circuitBreakerPage.clickInvoke();
    browser.wait(
        EC.textToBePresentInElement(
            circuitBreakerPage.getGreetingElement(), GreetingResult.Working),
        1000);
  });

  it('Click invoke after click toggle and return to previous state', () => {
    const circuitBreakerPage = new CircuitBreakerPage();
    circuitBreakerPage.get();
    circuitBreakerPage.clickToggle();
    browser.wait(
        EC.textToBePresentInElement(
            circuitBreakerPage.getNameServiceStateElement(),
            NameServiceState.Failure),
        1000);
    circuitBreakerPage.clickInvoke();
    browser.wait(
        EC.textToBePresentInElement(
            circuitBreakerPage.getGreetingElement(), GreetingResult.Failure),
        1000);
    circuitBreakerPage.clickToggle();
    browser.wait(
        EC.textToBePresentInElement(
            circuitBreakerPage.getNameServiceStateElement(),
            NameServiceState.Working),
        1000);
    circuitBreakerPage.clickInvoke();
    browser.wait(
        EC.textToBePresentInElement(
            circuitBreakerPage.getGreetingElement(), GreetingResult.Working),
        1000);
  });
});
