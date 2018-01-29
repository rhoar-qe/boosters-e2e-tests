import {browser} from 'protractor';
export abstract class BoosterPage{
  private readonly URL;
  public constructor(url : string){
    this.URL = url;
    this.get();
  }
  public get(){
    browser.get(this.URL);
  }
}
