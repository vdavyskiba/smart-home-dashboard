import {it, inject, beforeEachProviders} from 'angular2/testing';

import App from './app';
import States from '../../states/states';
import Constants from '../../../constants/constants';

describe('App', () => {

  beforeEachProviders(() => [
    App
  ]);

  it('should have a dashboard link', inject([ App ], (app) => {

    expect(app.dashboardUrl).toEqual(States.dashboard.name);

  }));

  it('should have a about link', inject([ App ], (app) => {

    expect(app.aboutUrl).toEqual(States.about.name);

  }));

  it('should have a authorization url', inject([ App ], (app) => {

    expect(app.authUrl).toEqual(Constants.auth_url);

  }));

  it('should have a logout url', inject([ App ], (app) => {

    expect(app.logoutUrl).toEqual(Constants.logout_url);

  }));

  it('should be not authorized by default', inject([ App ], (app) => {

    expect(app.authorized).toEqual(false);

  }));

});
