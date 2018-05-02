# End to end test for boosters
## Requirements
For the first time, you have to install the [npm](https://www.npmjs.com/get-npm) and [protractor](http://www.protractortest.org).

## List of boosters
* http
* configMap
* crud
* healthCheck
* circuitBreaker
* securedHttp
* cache

## List of runtime
* vertx
* nodejs
* springboot
* wfswarm

## Before run test
### Install dependencies
```bash
$ npm install
```
### Update and run webdriver manager
```bash
$ npm run webdriver:update
$ npm run webdriver:start
```

## Run specific test suite
Name of test suit is same as the name of the booster.
#### Requirement
* You have to have a deployed booster and have their URL address
```bash
$ npm run test -- --suite=${booster} --params.url.boosters.${booster}=${boosterURL} --params.runtime=${boostersRuntime}
```

## Run tests for all booster with the environmental variables
Is necessary to set URL address of boosters and runtime of the boosters. Optionally you can set config map value and user credentials for secured booster
#### Requirement
* You have to to have deployed all boosters and have theirs URL address

### Using the parameters
```bash
$ npm run test -- \
    --params.url.boosters.http=${httpURL} \
    --params.url.boosters.configMap=${configMapURL} \
    --params.url.boosters.crud=${crudURL} \
    --params.url.boosters.healthCheck=${healthCheckURL} \
    --params.url.boosters.circuitBreaker=${circuitBreakerURL} \
    --params.url.boosters.securedHttp=${securedHttpURL} \
    --params.runtime=${boostersRuntime}

// Run tests with optional variables
$ npm run test -- \
    --params.url.boosters.http=${httpURL} \
    --params.url.boosters.configMap=${configMapURL} \
    --params.url.boosters.crud=${crudURL} \
    --params.url.boosters.healthCheck=${healthCheckURL} \
    --params.url.boosters.circuitBreaker=${circuitBreakerURL} \
    --params.url.boosters.securedHttp=${securedHttpURL} \
    --params.runtime=${boostersRuntime} \
    --params.values.configMap=${configMapValue} \
    --params.values.securedHttp.username=${securedHttpUsername}\
    --params.values.securedHttp.password=${securedHttpPassword}

```
### Using the exported variables
```bash
$ export HTTP_BOOSTER_URL=${httpURL}
$ export CONFIG_MAP_BOOSTER_URL=${configMapURL} 
$ export CRUD_BOOSTER_URL=${crudURL}
$ export HEALTH_CHECK_BOOSTER_URL=${healthCheckURL}
$ export CIRCUIT_BREAKER_BOOSTER_URL=${circuitBreakerURL}
$ export SECURED_HTTP_BOOSTER_URL=${securedHttpURL}
$ export CACHE_BOOSTER_URL=${cacheURL}

$ export BOOSTER_RUNTIME=${boostersRuntime}

#Optional variables
$ export CONFIG_MAP_BOOSTER_VALUE=${configMapValue}
$ export SECURED_HTTP_BOOSTER_USERNAME=${securedBoosterUsername}
$ export SECURED_HTTP_BOOSTER_PASSWORD=${securedBoosterPassword}

$ npm run test
```
