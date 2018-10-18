# End to end tests for RHOAR boosters

## Requirements

You have to have Node.js 8.9.0+ installed. NPM comes automatically with Node.js.

## List of boosters

* `http`
* `configMap`
* `crud`
* `healthCheck`
* `circuitBreaker`
* `securedHttp`
* `cache`

## List of runtimes

* `vertx`
* `nodejs`
* `springboot`
* `thorntail`

## Before running the tests

### Install dependencies

```bash
npm install
```

### Update webdriver manager

```bash
npx webdriver-manager update
```

## Running tests for a single booster

- `${booster}` is a string from the list of boosters above
- `${runtime}` is a string from the list of runtimes above
- `${boosterUrl}` is a URL of the booster deployed on OpenShift (TODO multi-service boosters)

```bash
npm run test -- --suite=${booster} --params.url.${booster}=${boosterUrl} --params.runtime=${runtime}
```

## Running tests for all boosters

### Using parameters

```bash
npm run test -- \
    --params.url.http=${httpUrl} \
    --params.url.configMap=${configMapUrl} \
    --params.url.crud=${crudUrl} \
    --params.url.healthCheck=${healthCheckUrl} \
    --params.url.circuitBreaker=${circuitBreakerUrl} \
    --params.url.securedHttp=${securedHttpUrl} \
    --params.runtime=${boostersRuntime}
```

### Using environment variables

```bash
export HTTP_BOOSTER_URL=${httpUrl}
export CONFIG_MAP_BOOSTER_URL=${configMapUrl} 
export CRUD_BOOSTER_URL=${crudUrl}
export HEALTH_CHECK_BOOSTER_URL=${healthCheckUrl}
export CIRCUIT_BREAKER_BOOSTER_URL=${circuitBreakerUrl}
export SECURED_HTTP_BOOSTER_URL=${securedHttpUrl}
export CACHE_BOOSTER_URL=${cacheUrl}

export BOOSTER_RUNTIME=${boostersRuntime}

npm run test
```
