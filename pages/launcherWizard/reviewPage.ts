import {browser, element, by, protractor} from 'protractor';
import {ProjectVersion} from './'

export abstract class ReviewPage  {
  //TODO write issue for add id to h3 radio button
  private missionSpan = element(by.xpath('//b[text()=\'Mission\']/../../p[2]/span'));
  private runtimeSpan = element(by.xpath('//b[text()=\'Runtime\']/../../p[2]/span'));
  private versionSpan = element(by.xpath('//b[text()=\'Runtime Version:\']/../span'));
  private nameSpan = element(by.xpath('//b[text()=\'OpenShift Project name:\']/../span'));

  validateMission(mission : string) : any {
    expect(this.missionSpan.getText()).toContain(mission);
  }

  validateRuntime(runtime : string) : any {
    expect(this.runtimeSpan.getText()).toContain(runtime);
  }

  validateVersion(version : ProjectVersion) : any {
    expect(this.versionSpan.getText()).toContain(version);
  }

  validateName(name : string) {
    expect(this.nameSpan.getText()).toContain(name);
  }

}
