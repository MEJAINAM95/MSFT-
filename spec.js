describe('Microsoft Test Suite', function() {
  it('Login Test case ', function() {
    browser.get('https://microsoftprod.btsmomenta.com');
    //browser.ignoreSynchronization = true;
    expect(browser.getTitle()).toEqual('Momenta');

    element(by.name('Enter your Email')).sendKeys('m2@microsoft.com');

    element(by.name('Enter your Password')).sendKeys('ABab12$');

    element(by.name('Login')).click();

    element(by.name('Select your industry')).element(by.css("option[value='fc9868e7db79063f9808']")).click();

    element(by.name('Continue')).click().then(function(){browser.sleep(5000)});

    element(by.id('mat-radio-2')).click();

    element(by.name('Continue to Next Activity')).click().then(function(){browser.sleep(5000)});

    //account code 
    element.all(by.className('plugin-single__text')).first().click().then(function(){
    element(by.name('Continue to Next Activity')).click().then(function(){browser.sleep(5000)});
    browser.sleep(5000)});

    //radio button code 
    element(by.id('mat-radio-16')).click().then(function(){browser.sleep(2000)});
    element(by.id('mat-radio-21')).click().then(function(){browser.sleep(2000)});
    element(by.id('mat-radio-26')).click().then(function()
    {
      element(by.name('Continue to Next Activity')).click().then(function(){browser.sleep(5000)});
      browser.sleep(10000);
    });
    //element(by.id('mat-radio-31')).click().then(function(){browser.sleep(2000)});
    //element(by.id('mat-radio-36')).click().then(function(){browser.sleep(3000)});
    //element(by.id('mat-radio-41')).click().then(function(){browser.sleep(3000)});  
    //element(by.id('mat-radio-46')).click().then(function(){browser.sleep(3000)});
    //element(by.id('mat-radio-51')).click().then(function(){browser.sleep(3000)});

    // thank you screen  
    element(by.name('Continue to Next Activity')).click().then(function()
    {
      console.log("Awesome you are landed on first video");
      browser.sleep(10000);
    });

    //first video Episode 1 
    var First_video = element(by.className('plugin-activity-subtitle ng-star-inserted'));
    expect(First_video.getText()).toEqual(' Episode 1 ').then(function()
    {
      browser.sleep(5000);
      element(by.name('Continue to Next Activity')).click();
    });
    
    //second video "inside the episode 1"
    var Second_video = element(by.className('plugin-activity-subtitle ng-star-inserted'));
    expect(First_video.getText()).toEqual(' Inside The Episode 1').then(function()
    {
      browser.sleep(5000);
      element(by.name('Continue to Next Activity')).click();
    });

  });
});