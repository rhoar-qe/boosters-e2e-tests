import {MissionPage} from '../missionPage';
import {OpenShiftRuntimePage} from './';

export class OpenShiftMissionPage extends MissionPage {
  clickNext(): OpenShiftRuntimePage {
    this.nextButton.click();
    return new OpenShiftRuntimePage();
  }

  selectSecuredHTTP(): void {
      throw new Error("This mission not suport yet");
  }
}
