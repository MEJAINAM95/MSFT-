describe('Microsoft Test Suite', function() {
  it('Login Test case ', function() {
    browser.get('https://microsoftprod.btsmomenta.com');
    expect(browser.getTitle()).toEqual('Momenta');

    element(by.name('Enter your Email')).sendKeys('m2@microsoft.com');

    element(by.name('Enter your Password')).sendKeys('ABab12$');

    element(by.name('Login')).click();

    element(by.name('Select your industry')).element(by.css("option[value='fc9868e7db79063f9808']")).click();

    element(by.name('Continue')).click().then(function(){browser.sleep(9000)});


  });
});