# Requirements
* Have installed npm: https://developer.fedoraproject.org/tech/languages/nodejs/nodejs.html
* Have installed protractor: http://www.protractortest.org/#/

## Setup
```
$ npm install
$ webdriver-manager update
$ webdriver-manager start
```
## Before Test
Is necessary set URL address for boosters and default value of config map
```
export HTTP_BOOSTER_URL="url for http booster"
export CRUD_BOOSTER_URL="url for crud booster"
export CIRCUIT_BREAKER_BOOSTER_URL="url for circuit breaker booster"
export CONFIG_MAP_BOOSTER_URL="url for config map booster"
export HEALTH_CHECK_BOOSTER_URL="url for health check booster"

export CONFIG_MAP_BOOSTER_VALUE="Hello, %s from a ConfigMap !"

```

## Run the test
```
npm test
```
