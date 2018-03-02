import {browser, by, element, ElementFinder, protractor} from 'protractor';

import {HttpPage} from './';

export class ConfigMapPage extends HttpPage {
  private configMapValue;

  constructor(value: string = ConfigMapPage.getDefaultConfigMapValue()) {
    super(browser.params.url.boosters.configMap);
    this.setConfigMapValue(value);
  }

  static getDefaultConfigMapValue(): string {
    return browser.params.values.boosters.configMap;
  }

  setConfigMapValue(value: string) {
    this.configMapValue = value;
  }

  getConfigMapValue(): string {
    return this.configMapValue;
  }

  getExceptedGreetingResult(name: string): string {
    return this.configMapValue.replace('%s', name);
  }
}
