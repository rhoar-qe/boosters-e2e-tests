import * as Pages from '../pages';
import { browser, $$ } from 'protractor';

// The jasmine typings are brought in via DefinitelyTyped ambient typings.
describe('HTTP booster page', () => {
  it('Should greet the named user', () => {
    let launcherDashboard = new Pages.LauncherDashboard();
    launcherDashboard.get();
    let launcherDeploymentType = launcherDashboard.clickLauch();
    let launcherMission = launcherDeploymentType.clickLauch();
    launcherMission.selectCRUD();
    let launcherRuntime = launcherMission.clickNext();
    launcherRuntime.selectVertx();
    let projectInfo = launcherRuntime.clickNext();
    projectInfo.selectVersion(Pages.ProjectVersion.RHOAR);
    projectInfo.setProjectName('name');
    let launcherReview = projectInfo.clickNext();
    launcherReview.validateMission('CRUD');
    launcherReview.validateRuntime('Eclipse Vert.x');
    launcherReview.validateVersion(Pages.ProjectVersion.RHOAR);
    launcherReview.validateName('name');
    let launcherBuildingProject = launcherReview.clickNext();
    launcherBuildingProject.clickNext();

    browser.sleep(8000);
    //await expect($$('btn btn-primary box-btn').first()).toHaveBeenCalled();
  });
});
