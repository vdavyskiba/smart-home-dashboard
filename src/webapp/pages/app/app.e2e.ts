import {describe, it, beforeEach, expect} from 'angular2/testing';

describe('App', () => {

  beforeEach(() => {

    browser.get('/');

  });

  it('should have a title', () => {

    let subject = browser.getTitle();

    let result  = 'Nest Dashboard';

    expect(subject).toEqual(result);

  });

  it('should have router-outlet', () => {

    let subject = element(by.css('app router-outlet')).isPresent();

    expect(subject).toEqual(true);

  });

});
