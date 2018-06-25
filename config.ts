import {browser, Config} from 'protractor';

export let config: Config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  framework: 'jasmine',
  jasmineNodeOpts: {
    // This is also the default value for `browser.wait`, see https://github.com/angular/protractor/issues/4605.
    defaultTimeoutInterval: 120_000,
  },
  resultJsonOutputFile: './result.json',
  // I'd love to set `restartBrowserBetweenTests` to `true`, but then capturing screenshots at the end of spec
  // doesn't work. This is because reporter callbacks in Jasmine 2 can only be synchronous. No async actions
  // (such as taking the screenshot) dispatched from reporter callbacks are awaited; the browser gets shut down
  // sooner than the screenshot can be taken. Jasmine 3 already supports async reporter callbacks (see [1]),
  // but Protractor doesn't support Jasmine 3 yet (see [2]). Also the `protractor-screenshoter-plugin` will have to be
  // updated to actually make use of that support (no tracking issue nor pull request exists as of this writing).
  //
  // [1] https://github.com/jasmine/jasmine/issues/842
  // [2] https://github.com/angular/protractor/pull/4842
  restartBrowserBetweenTests: false,
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: ['--headless', '--no-sandbox', '--disable-gpu', '--window-size=1024,768'],
    },
    'moz:firefoxOptions': {
      args: ['--headless'],
    },
  },
  plugins: [
    {package: 'protractor-screenshoter-plugin'},
  ],
  onPrepare: async () => browser.getProcessedConfig(),

  specs: ['specs/spec*.js'],
  suites: {
    http: ['specs/specHttpBooster.js'],
    crud: ['specs/specCrudBooster.js'],
    circuitBreaker: ['specs/specCircuitBreakerBooster.js'],
    configMap: ['specs/specConfigMapBooster.js'],
    healthCheck: ['specs/specHealthCheckBooster.js'],
    securedHttp: ['specs/specSecuredHttpBooster.js'],
    cache: ['specs/specCacheBooster.js'],
  },

  params: {
    runtime: process.env.BOOSTER_RUNTIME,
    url: {
      http: process.env.HTTP_BOOSTER_URL,
      crud: process.env.CRUD_BOOSTER_URL,
      circuitBreaker: process.env.CIRCUIT_BREAKER_BOOSTER_URL,
      configMap: process.env.CONFIG_MAP_BOOSTER_URL,
      healthCheck: process.env.HEALTH_CHECK_BOOSTER_URL,
      securedHttp: process.env.SECURED_HTTP_BOOSTER_URL,
      cache: process.env.CACHE_BOOSTER_URL,
    },
  },
};
