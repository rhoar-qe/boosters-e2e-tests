import * as Pages from '../../pages'
export class SpecUtils {

  public static deployProject(name: string ,mission: Pages.Mission, runtime: Pages.Runtime, version: Pages.ProjectVersion, useOpneshift: boolean){
      let dashboardPage = new Pages.DashboardPage();
      dashboardPage.get();
      let deploymentPage = dashboardPage.clickLauch();
      if(useOpneshift){
        SpecUtils.deployViaOpenshift(name,mission,runtime, version, deploymentPage);
      }

  }

  public static deployViaOpenshift(name: string ,mission: Pages.Mission, runtime: Pages.Runtime,version: Pages.ProjectVersion,deploymentPage: Pages.DeploymentTypePage){
    let missionPage = deploymentPage.clickUseOpenShift();
    missionPage.selectMission(mission);
    let runtimePage = missionPage.clickNext();
    runtimePage.selectRuntime(runtime);
    let projectInfoPage = runtimePage.clickNext();
    projectInfoPage.selectVersion(version);
    projectInfoPage.setProjectName(name);
    let reviewPage = projectInfoPage.clickNext();
    reviewPage.validateMission(mission);
    reviewPage.validateRuntime(runtime);
    reviewPage.validateVersion(version);
    reviewPage.validateName(name);
    let buildingProjectPage = reviewPage.clickLaunch();
    let nextStepPage = buildingProjectPage.clickNext();
  }

}
