import {CircuitBreakerPage,NameServiceState,GreetingResult} from '../pages';
import {browser,protractor} from 'protractor';

// The jasmine typings are brought in via DefinitelyTyped ambient typings.
describe('Circuit breaker booster page', () => {
  it('Click invoke without toogle', () => {
    let circuitBreakerPage = new CircuitBreakerPage();
    let EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement(circuitBreakerPage.getNameServiceStateElement(), NameServiceState.Working),1000);
    circuitBreakerPage.clickInvoke();
    browser.wait(EC.textToBePresentInElement(circuitBreakerPage.getGreetingElement(),"Hello, " + GreetingResult.Working ),1000);
  });

  it('Click invoke after click toogle and return to prew state', () => {
    let circuitBreakerPage = new CircuitBreakerPage();
    let EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement(circuitBreakerPage.getNameServiceStateElement(), NameServiceState.Working),1000);
    circuitBreakerPage.clickToggle();
    browser.wait(EC.textToBePresentInElement(circuitBreakerPage.getNameServiceStateElement(), NameServiceState.Failure),1000);
    circuitBreakerPage.clickInvoke();
    browser.wait(EC.textToBePresentInElement(circuitBreakerPage.getGreetingElement(),"Hello, " + GreetingResult.Failure ),1000);
    circuitBreakerPage.clickToggle();
    browser.wait(EC.textToBePresentInElement(circuitBreakerPage.getNameServiceStateElement(), NameServiceState.Working),1000);
    circuitBreakerPage.clickInvoke();
    browser.wait(EC.textToBePresentInElement(circuitBreakerPage.getGreetingElement(),"Hello, " + GreetingResult.Working ),1000);
  });
});
