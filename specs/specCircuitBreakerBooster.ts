import { CircuitBreakerPage, NameServiceState, GreetingResult } from '../pages';
import { browser, protractor } from 'protractor';

describe('Circuit breaker booster page', () => {

  let EC = protractor.ExpectedConditions;

  beforeEach(async () => {
    let circuitBreakerPage = new CircuitBreakerPage();
    await circuitBreakerPage.get();
    let text = await circuitBreakerPage.getNameServiceStateElement().getText();
    if (text === NameServiceState.Failure) {
      await circuitBreakerPage.clickToggle();
      browser.wait(EC.textToBePresentInElement(circuitBreakerPage.getNameServiceStateElement(), NameServiceState.Working), 1000);
    }
  });

  it('Click invoke without toggle', () => {
    let circuitBreakerPage = new CircuitBreakerPage();
    circuitBreakerPage.get();
    browser.wait(EC.textToBePresentInElement(circuitBreakerPage.getNameServiceStateElement(), NameServiceState.Working), 1000);
    browser.wait(circuitBreakerPage.getGreetingElement().isPresent(), 1000);
    circuitBreakerPage.clickInvoke();
    browser.wait(EC.textToBePresentInElement(circuitBreakerPage.getGreetingElement(), GreetingResult.Working), 1000);
  });

  it('Click invoke after click toggle and return to previous state', () => {
    let circuitBreakerPage = new CircuitBreakerPage();
    circuitBreakerPage.get();
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
