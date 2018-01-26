import {browser, element, by, protractor} from 'protractor';
import {ProjectVersion, Mission, Runtime} from './'

export abstract class ReviewPage  {
  //TODO write issue for add id to h3 radio button
  private missionSpan = element(by.xpath('//b[text()=\'Mission\']/../../p[2]/span'));
  private runtimeSpan = element(by.xpath('//b[text()=\'Runtime\']/../../p[2]/span'));
  private versionSpan = element(by.xpath('//b[text()=\'Runtime Version:\']/../span'));
  private nameSpan = element(by.xpath('//b[text()=\'OpenShift Project name:\']/../span'));

  validateMission(mission : Mission) : void {
    expect(this.missionSpan.getText()).toContain(Mission[mission]);
  }

  validateRuntime(runtime : Runtime) : void {
    expect(this.runtimeSpan.getText()).toContain(Runtime[runtime]);
  }

  validateVersion(version : ProjectVersion) : void {
    expect(this.versionSpan.getText()).toContain(ProjectVersion[version]);
  }

  validateName(name : string) : void {
    expect(this.nameSpan.getText()).toContain(name);
  }

}
