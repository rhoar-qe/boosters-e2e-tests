import * as SpecUtils from './utils';
import {ProjectVersion,Mission,Runtime} from '../pages';
import { browser, $$ } from 'protractor';

// The jasmine typings are brought in via DefinitelyTyped ambient typings.
describe('Deploying via launcher use openshift', () => {
  it('Deploy vertx CRUD', () => {
    SpecUtils.SpecUtils.deployProject("vertx-crud",Mission.CRUD,Runtime.Vertx,ProjectVersion.RHOAR, true)
  });
});
