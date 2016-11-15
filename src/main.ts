import 'ie-shim';
import 'es6-shim';
import 'es6-promise';
import 'es7-reflect-metadata';
import 'zone.js/dist/zone-microtask';

import {enableProdMode, provide} from 'angular2/core';
import {bootstrap, ELEMENT_PROBE_PROVIDERS} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';

import App from './webapp/pages/app/app';




const ENV_PROVIDERS = [];

if (ENV === 'production') {

  enableProdMode();

} else {

  Error.stackTraceLimit = Infinity;

  require('zone.js/dist/long-stack-trace-zone');

  ENV_PROVIDERS.push(ELEMENT_PROBE_PROVIDERS);

  //activate hot module reload
  if (HMR) {
    module.hot.accept();
  }
}

bootstrap(App, [
  ...ENV_PROVIDERS,
  ...HTTP_PROVIDERS,
  ...ROUTER_PROVIDERS,
  provide(LocationStrategy, { useClass: HashLocationStrategy })
])
.catch(err => console.error(err));
