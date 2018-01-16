import {HttpBoosterPage} from '../pages';
import {browser,protractor} from 'protractor';

// The jasmine typings are brought in via DefinitelyTyped ambient typings.
describe('HTTP booster page', () => {
  it('Should greet the named user', () => {
    let httpBoosterPage = new HttpBoosterPage();
    httpBoosterPage.get();
    httpBoosterPage.setName('Julie');
    httpBoosterPage.clickInvoke();
    browser.wait(protractor.ExpectedConditions.textToBePresentInElement(httpBoosterPage.getGreeting(),"Hello, Julie"),1000);
  });
});
