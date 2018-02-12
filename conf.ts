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
import { Config } from 'protractor';

export let config: Config = {
  framework: 'jasmine',
  capabilities: {
    browserName: 'chrome'
  },
  specs: ['specs/spec*Booster.js'],
  seleniumAddress: 'http://localhost:4444/wd/hub',
  params: {
    url: {
      launcher: process.env.LAUNCHER_URL,
      boosters: {
        http: process.env.HTTP_BOOSTER_URL,
        crud: process.env.CRUD_BOOSTER_URL,
        circuitBreaker: process.env.CIRCUIT_BREAKER_BOOSTER_URL,
        configMap: process.env.CONFIG_MAP_BOOSTER_URL,
        healthCheck: process.env.HEALTH_CHECK_BOOSTER_URL,
        securedHttp: process.env.SECURED_HTTP_BOOSTER_URL,
      }
    },
    values: {
      boosters: {
        configMap: process.env.CONFIG_MAP_BOOSTER_VALUE,
        securedHttp: {
          username: process.env.SECURED_HTTP_BOOSTER_USERMAME,
          password: process.env.SECURED_HTTP_BOOSTER_PASSWORD,
        }
      }
    }
  },
  jasmineNodeOpts: {
    defaultTimeoutInterval: 10000000
  },
  resultJsonOutputFile: './result.json',
  restartBrowserBetweenTests: true
};
