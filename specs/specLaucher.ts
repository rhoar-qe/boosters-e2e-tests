import {LauncherUtil} from './utils';
import {ProjectVersion,Mission,Runtime} from '../pages';
import { browser, $$ } from 'protractor';

for(let runtime in Runtime){
  describe('Deploying '+ runtime +' boosters via launcher use openshift', () => {
    for (let mission in Mission){
      for(let version in ProjectVersion){
        it('Deploy mission ' + mission + ' use version ' + version, async() => {
          await LauncherUtil.deployViaOpenshift(<Mission>mission,<Runtime>runtime,<ProjectVersion>version);
        });
      }
    }
  });
}
