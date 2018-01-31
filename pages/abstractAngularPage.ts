import {browser, by, element, ElementFinder} from 'protractor';
export abstract class AbstractAngularPage{
  private readonly URL;

  public constructor(url : string){
    this.URL = url;
  }
  public async get() : Promise<void>{
    return browser.get(this.URL);
  }
}
