import {HttpPage} from '../pages';
import {browser,protractor} from 'protractor';

// The jasmine typings are brought in via DefinitelyTyped ambient typings.
describe('HTTP booster page', () => {
  it('Greetings test with name', () => {
    let name : string = 'Julie';
    let httpBoosterPage = new HttpPage();
    httpBoosterPage.get();
    httpBoosterPage.setName(name);
    httpBoosterPage.clickInvoke();
    let EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement(httpBoosterPage.getGreetingElement(),"Hello, " + name),1000);
  });

it('Test the default greeting', () => {
    let httpBoosterPage = new HttpPage();
    let name = HttpPage.GREETINGS_DEFAULT_NAME;
    httpBoosterPage.get();
    httpBoosterPage.clickInvoke();
    let EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement(httpBoosterPage.getGreetingElement(),"Hello, " + name),1000);
  });
});
