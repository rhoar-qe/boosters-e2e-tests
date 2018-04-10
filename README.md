# End to end test for boosters
## Goal of this Repository
The goal of this repository is to provide End-to-End (EE) tests for the boosters:
* REST API Level 0 Mission
    * Eclipse Vert.x [community](https://github.com/openshiftio-vertx-boosters/vertx-http-booster) and [product](https://github.com/openshiftio-vertx-boosters/vertx-http-booster-redhat) boosters
    * Node.js [community](https://github.com/bucharest-gold/nodejs-rest-http) and [product](https://github.com/bucharest-gold/nodejs-rest-http-redhat) boosters
    * Spring Boot [community](https://github.com/snowdrop/spring-boot-http-booster) and [product](https://github.com/snowdrop/spring-boot-http-booster/tree/redhat) boosters
    * Wildfly Swarm [community](https://github.com/wildfly-swarm-openshiftio-boosters/wfswarm-rest-http) and [product](https://github.com/wildfly-swarm-openshiftio-boosters/wfswarm-rest-http-redhat) boosters
* Externalized Configuration Mission
    * Eclipse Vert.x [community](https://github.com/openshiftio-vertx-boosters/vertx-configmap-booster) and [product](https://github.com/openshiftio-vertx-boosters/vertx-configmap-booster-redhat) boosters
    * Node.js [community](https://github.com/bucharest-gold/nodejs-configmap) and [product](https://github.com/bucharest-gold/nodejs-configmap-redhat) boosters
    * Spring Boot [community](https://github.com/snowdrop/spring-boot-configmap-booster) and [product](https://github.com/snowdrop/spring-boot-configmap-booster/tree/redhat) boosters
    * Wildfly Swarm [community](https://github.com/wildfly-swarm-openshiftio-boosters/wfswarm-configmap) and [product](https://github.com/wildfly-swarm-openshiftio-boosters/wfswarm-configmap-redhat) boosters
* Relational Database Backend Mission
    * Eclipse Vert.x [community](https://github.com/openshiftio-vertx-boosters/vertx-crud-booster) and [product](https://github.com/openshiftio-vertx-boosters/vertx-crud-booster-redhat) boosters
    * Node.js [community](https://github.com/bucharest-gold/nodejs-rest-http-crud) and [product](https://github.com/bucharest-gold/nodejs-rest-http-crud-redhat) boosters
    * Spring Boot [community](https://github.com/snowdrop/spring-boot-crud-booster) and [product](https://github.com/snowdrop/spring-boot-crud-booster/tree/redhat) boosters
    * Wildfly Swarm [community](https://github.com/wildfly-swarm-openshiftio-boosters/wfswarm-rest-http-crud) and [product](https://github.com/wildfly-swarm-openshiftio-boosters/wfswarm-rest-http-crud-redhat) boosters
* Health Check Mission
    * Eclipse Vert.x [community](https://github.com/openshiftio-vertx-boosters/vertx-health-checks-booster) and [product](https://github.com/openshiftio-vertx-boosters/vertx-health-checks-booster-redhat) boosters
    * Node.js [community](https://github.com/bucharest-gold/nodejs-health-check) and [product](https://github.com/bucharest-gold/nodejs-health-check-redhat) boosters
    * Spring Boot [community](https://github.com/snowdrop/spring-boot-health-check-booster) and [product](https://github.com/snowdrop/spring-boot-health-check-booster/tree/redhat) boosters
    * Wildfly Swarm [community](https://github.com/wildfly-swarm-openshiftio-boosters/wfswarm-health-check) and [product](https://github.com/wildfly-swarm-openshiftio-boosters/wfswarm-health-check-redhat) boosters
* Circuit Breaker Mission
    * Eclipse Vert.x [community](https://github.com/openshiftio-vertx-boosters/vertx-circuit-breaker-booster) and [product](https://github.com/openshiftio-vertx-boosters/vertx-circuit-breaker-booster-redhat) boosters
    * Node.js [community](https://github.com/bucharest-gold/nodejs-circuit-breaker) and [product](https://github.com/bucharest-gold/nodejs-circuit-breaker-redhat) boosters
    * Spring Boot [community](https://github.com/snowdrop/spring-boot-circuit-breaker-booster) and [product](https://github.com/snowdrop/spring-boot-circuit-breaker-booster/tree/redhat) boosters
    * Wildfly Swarm [community](https://github.com/wildfly-swarm-openshiftio-boosters/wfswarm-circuit-breaker) and [product](https://github.com/wildfly-swarm-openshiftio-boosters/wfswarm-circuit-breaker-redhat) boosters
* Secured Mission
    * Eclipse Vert.x [community](https://github.com/openshiftio-vertx-boosters/vertx-secured-http-booster) and [product](https://github.com/openshiftio-vertx-boosters/vertx-secured-http-booster-redhat) boosters
    * Node.js [community](https://github.com/bucharest-gold/nodejs-rest-http-secured) and [product](https://github.com/bucharest-gold/nodejs-rest-http-secured-redhat) boosters
    * Spring Boot [community](https://github.com/snowdrop/spring-boot-http-secured-booster) and [product](https://github.com/snowdrop/spring-boot-http-secured-booster/tree/redhat) boosters
    * Wildfly Swarm [community](https://github.com/wildfly-swarm-openshiftio-boosters/wfswarm-rest-http-secured) and [product](https://github.com/wildfly-swarm-openshiftio-boosters/wfswarm-rest-http-secured-redhat) boosters

## Requirements
For the first time, you have to install the [npm](https://www.npmjs.com/get-npm) and [protractor](http://www.protractortest.org).

## List of boosters
* http
* configMap
* crud
* healthCheck
* circuitBreaker
* securedHttp

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
$ npm run webdriver:start
$ npm run webdriver:update
```

## Run specific test suite
Name of test suit is same as the name of the booster.
#### Requirement
* You have to have a deployed booster and have their URL address
```bash
$ npm run test -- --suite=${booster} --parameters.url.boosters.${booster}=${boosterURL} --parameters.runtime=${boostersRuntime}
```

## Run tests for all booster with the environmental variables
Is necessary to set URL address of boosters and runtime of the boosters. Optionally you can set config map value and user credentials for secured booster
#### Requirement
* You have to to have deployed all boosters and have theirs URL address

### Using the parameters
```bash
$ npm run test -- \
    --parameters.url.boosters.http=${httpURL} \
    --parameters.url.boosters.configMap=${configMapURL} \
    --parameters.url.boosters.crud=${crudURL} \
    --parameters.url.boosters.healthCheck=${healthCheckURL} \
    --parameters.url.boosters.circuitBreaker=${circuitBreakerURL} \
    --parameters.url.boosters.securedHttp=${securedHttpURL} \
    --parameters.runtime=${boostersRuntime}

// Run tests with optional variables
$ npm run test -- \
    --parameters.url.boosters.http=${httpURL} \
    --parameters.url.boosters.configMap=${configMapURL} \
    --parameters.url.boosters.crud=${crudURL} \
    --parameters.url.boosters.healthCheck=${healthCheckURL} \
    --parameters.url.boosters.circuitBreaker=${circuitBreakerURL} \
    --parameters.url.boosters.securedHttp=${securedHttpURL} \
    --parameters.runtime=${boostersRuntime} \
    --parameters.values.configMap=${configMapValue} \
    --parameters.values.securedHttp.username=${securedHttpUsername}\
    --parameters.values.securedHttp.password=${securedHttpPassword}

```
### Using the exported variables
```bash
$ export HTTP_BOOSTER_URL=${httpURL}
$ export CONFIG_MAP_BOOSTER_URL=${configMapURL} 
$ export CRUD_BOOSTER_URL=${crudURL}
$ export HEALTH_CHECK_BOOSTER_URL=${healthCheckURL}
$ export CIRCUIT_BREAKER_BOOSTER_URL=${circuitBreakerURL}
$ export SECURED_HTTP_BOOSTER_URL=${securedHttpURL}

$ export BOOSTER_RUNTIME=${boostersRuntime}

#Optional variables
$ export CONFIG_MAP_BOOSTER_VALUE=${configMapValue}
$ export SECURED_HTTP_BOOSTER_USERNAME=${securedBoosterUsername}
$ export SECURED_HTTP_BOOSTER_PASSWORD=${securedBoosterPassword}

$ npm run test
```
