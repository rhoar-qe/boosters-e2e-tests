import {browser, element, by, protractor, ElementFinder} from 'protractor';
import {HttpPage} from './';

export class ConfigMapPage extends HttpPage  {

  public static readonly CONFIG_MAP_GREETINGS_DEFAULT_NAME = "World";
  private configMapValue;

  public constructor (value : string = ConfigMapPage.getDefaultConfigMapValue()) {
    super(browser.params.url.boosters.configMap);
    this.setConfigMapValue(value);
  }

  public static getDefaultConfigMapValue () : string {
    return browser.params.values.boosters.configMap;
  }

  public setConfigMapValue(value : string){
    this.configMapValue = value;
  }

  public getConfigMapValue() : string {
    return this.configMapValue;
  }

  public getExceptedGreetingResult(name : string) : string {
    return this.configMapValue.replace('%s',name);
  }
}
