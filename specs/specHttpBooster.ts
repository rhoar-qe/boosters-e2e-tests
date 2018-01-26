import {HttpBoosterPage} from '../pages';
import {browser,protractor} from 'protractor';

// The jasmine typings are brought in via DefinitelyTyped ambient typings.
describe('HTTP booster page', () => {
  it('Greetings test with name', () => {
    let name : string = 'Julie';
    let httpBoosterPage = new HttpBoosterPage();
    httpBoosterPage.get();
    httpBoosterPage.setName(name);
    httpBoosterPage.clickInvoke();
    httpBoosterPage.validateGreeting(name);
  });

  it('Test the default greeting', () => {
    let httpBoosterPage = new HttpBoosterPage();
    httpBoosterPage.get();
    httpBoosterPage.clickInvoke();
    httpBoosterPage.validateDefaultGreeting();
  });
});
