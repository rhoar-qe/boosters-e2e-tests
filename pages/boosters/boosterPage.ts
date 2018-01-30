import {browser} from 'protractor';
export abstract class BoosterPage{
  private readonly URL;
  public constructor(url : string){
    this.URL = url;
  }
  public get(){
    console.log('go to ' + this.URL);
    return browser.get(this.URL);
  }
}
