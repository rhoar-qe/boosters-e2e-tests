import {MissionPage} from '../missionPage';
import {LocallyRuntimePage} from './';

export class LocallyMissionPage extends MissionPage {
  clickNext(): LocallyRuntimePage {
    this.nextButton.click();
    return new LocallyRuntimePage();
  }
}
