describe('Dashboard', () => {

  beforeEach(() => {

    browser.get('/#/dashboard');

  });

  it('should have dashboard', () => {

    let subject = element(by.css('app dashboard')).isPresent();

    expect(subject).toEqual(true);

  });

  it('should have status widget', () => {

    let subject = element(by.css('app dashboard status')).isPresent();

    expect(subject).toEqual(true);

  });

  it('should have structure widget', () => {

    let subject = element(by.css('app dashboard structure')).isPresent();

    expect(subject).toEqual(true);

  });

});
