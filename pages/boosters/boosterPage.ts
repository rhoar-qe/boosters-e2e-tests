import {browser} from 'protractor';
export abstract class BoosterPage{
  private readonly URL;
  public constructor(url : string){
    this.URL = url;
  }
  public get(){
    return browser.get(this.URL);
  }
}
