import * as Pages from '../../pages'
export class LauncherUtil {

  public static deployViaOpenshift(mission: Pages.Mission, runtime: Pages.Runtime,version: Pages.ProjectVersion){
    let deploymentPage = LauncherUtil.getDashboardAndClickLaunch();
    let missionPage = deploymentPage.clickUseOpenShift();
    missionPage.selectMission(mission);
    let runtimePage = missionPage.clickNext();
    runtimePage.selectRuntime(runtime);
    let projectInfoPage = runtimePage.clickNext();
    projectInfoPage.selectVersion(version);
    let name = LauncherUtil.createProjectName(<Pages.Mission>mission,<Pages.Runtime>runtime,<Pages.ProjectVersion>version);
    projectInfoPage.setProjectName(name);
    let reviewPage = projectInfoPage.clickNext();
    reviewPage.validateMission(mission);
    reviewPage.validateRuntime(runtime);
    reviewPage.validateVersion(version);
    reviewPage.validateName(name);
    let buildingProjectPage = reviewPage.clickLaunch();
    let nextStepPage = buildingProjectPage.clickNext();
  }

  private static getDashboardAndClickLaunch() : Pages.DeploymentTypePage{
      let dashboardPage = new Pages.DashboardPage();
      dashboardPage.get();
      return dashboardPage.clickLauch();
  }

  private static createProjectName(mission: Pages.Mission, runtime: Pages.Runtime, version: Pages.ProjectVersion): string {
    let findRegex = /\W/g;
    let replace = '-';
    let ret = Pages.Mission[mission].toLowerCase().replace(findRegex,replace) + '-'
      + Pages.Runtime[runtime].toLowerCase().replace(findRegex,replace) + '-'
      + Pages.ProjectVersion[version].toLowerCase().replace(findRegex,replace);
    return ret;
  }

}
