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
Is necessary set up URL address for boosters, default value of config map and login credentials for secured booster
```
export HTTP_BOOSTER_URL="url for http booster"
export CRUD_BOOSTER_URL="url for crud booster"
export CIRCUIT_BREAKER_BOOSTER_URL="url for circuit breaker booster"
export CONFIG_MAP_BOOSTER_URL="url for config map booster"
export HEALTH_CHECK_BOOSTER_URL="url for health check booster"
export SECURED_HTTP_BOOSTER_URL="url for secured http booster"

export CONFIG_MAP_BOOSTER_VALUE="Hello, %s from a ConfigMap !"

export SECURED_HTTP_BOOSTER_PASSWORD=password
export SECURED_HTTP_BOOSTER_USERNAME=alice
```

## Run the test
```
npm test
```
