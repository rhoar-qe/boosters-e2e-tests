import {browser} from 'protractor';

import {HttpPage} from './HttpPage';

export class ConfigMapPage extends HttpPage {
  static readonly DEFAULT_CONFIGMAP_VALUE = 'Hello %s from a ConfigMap!';

  private configMapValue: string;

  constructor(url: string = browser.params.url.configMap,
              configMapValue: string = ConfigMapPage.DEFAULT_CONFIGMAP_VALUE) {
    super(url);
    this.configMapValue = configMapValue;
  }

  getExceptedGreetingResult(name: string): string {
    return this.configMapValue.replace('%s', name);
  }
}
