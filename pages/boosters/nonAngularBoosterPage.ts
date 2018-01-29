import {browser} from 'protractor';
import {BoosterPage} from './boosterPage'

export abstract class NonAngluarBoosterPage extends BoosterPage{

  public constructor(url : string){
    super(url);
  }

  public get(){
    browser.ignoreSynchronization = true;
    browser.waitForAngularEnabled(false);
    super.get();
  }
}
