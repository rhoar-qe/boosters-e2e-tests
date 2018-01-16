// Because this file imports from  protractor, you'll need to have it as a
// project dependency. Please see the reference config: lib/config.ts for more
// information.
//
// Why you might want to create your config with typescript:
// Editors like Microsoft Visual Studio Code will have autocomplete and
// description hints.
//
// To run this example, first transpile it to javascript with `npm run tsc`,
// then run `protractor confPageObjects.js`.
import {Config} from 'protractor';

export let config: Config = {
  framework: 'jasmine',
  capabilities: {
    browserName: 'chrome'
  },
  specs: [ 'specs/specL*.js' ],
  seleniumAddress: 'http://localhost:4444/wd/hub',
  params: {
    launcherUrl: "http://launchpad-nginx-my-laucher.192.168.42.199.nip.io/",
  }
};
