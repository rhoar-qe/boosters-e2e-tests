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
Is necessary set URL address for boosters
```
export HTTP_BOOSTER_URL="url for http booster"
export CRUD_BOOSTER_URL="url for crud booster"
export CIRCUIT_BREAKER_URL_URL="url for circuit breaker booster"
export CONFIG_MAP_URL="url for config map booster"
export HEALTH_CHECK_URL="url for health check booster"
```

## Run the test
```
npm test
```
