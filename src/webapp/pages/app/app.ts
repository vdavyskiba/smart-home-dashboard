import {Component, ViewEncapsulation} from 'angular2/core';
import {RouterLink, RouteConfig, RouterOutlet} from 'angular2/router';

const Cookies = require('js-cookie');
const material = require('material-design-lite/material.min.css');
const styles = require('./app.css');
const template = require('./app.html');

import Constants from '../../../constants/constants';
import States from '../../states/states';



@Component({
  selector: 'app',
  template: template,
  styles: [material, styles],
  encapsulation: ViewEncapsulation.None,
  directives: [RouterOutlet, RouterLink]
})

@RouteConfig([
  States.dashboard,
  States.about
])

export default class App {

  authorized: boolean;
  authUrl = Constants.auth_url;
  logoutUrl = Constants.logout_url;
  dashboardUrl = States.dashboard.name;
  aboutUrl = States.about.name;

  constructor() {
    this.authorized = !!Cookies.get(Constants.cookie_token);
  }

}
