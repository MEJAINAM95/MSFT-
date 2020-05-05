describe('Microsoft Test Suite', function() {

  it('Login Test case ', function() {
      browser.get('https://microsoftprod.btsmomenta.com');

      expect(browser.getTitle()).toEqual('Momenta');
      browser.driver.manage().window().maximize();
      //browser.waitForAngularEnabled=false;
      browser.ignoreSynchronization = true;
      element(by.id('userEmail')).sendKeys('m2@microsoft.com');

      element(by.id('password')).sendKeys('ABab12$');

      element(by.name('Login')).click().then(function() {
          browser.sleep(5000)
      });

      element(by.name('Select your industry')).element(by.css("option[value='fc9868e7db79063f9808']")).click().then(function() {
          browser.sleep(10000)
      });

      element(by.name('Continue')).click().then(function() {
          browser.sleep(10000)
      });

      element(by.id('mat-radio-2')).click();

      element(by.name('Continue to Next Activity')).click().then(function() {
          browser.sleep(5000)
      });

      //account code 
      element.all(by.className('plugin-single__text')).first().click().then(function() {
          element(by.name('Continue to Next Activity')).click().then(function() {
              browser.sleep(5000)
          });
          browser.sleep(5000)
      });


      //radio button code 
      element(by.id('mat-radio-16')).click().then(function() {
          browser.sleep(2000)
      });
      element(by.id('mat-radio-21')).click().then(function() {
          browser.sleep(2000)
      });
      element(by.id('mat-radio-26')).click().then(function() {
          element(by.name('Continue to Next Activity')).click().then(function() {
              browser.sleep(5000)
          });
          browser.sleep(10000);
      });
      //element(by.id('mat-radio-31')).click().then(function(){browser.sleep(2000)});
      //element(by.id('mat-radio-36')).click().then(function(){browser.sleep(3000)});
      //element(by.id('mat-radio-41')).click().then(function(){browser.sleep(3000)});  
      //element(by.id('mat-radio-46')).click().then(function(){browser.sleep(3000)});
      //element(by.id('mat-radio-51')).click().then(function(){browser.sleep(3000)});

      // thank you screen  
      element(by.name('Continue to Next Activity')).click().then(function() {
          browser.sleep(30000);
          element(by.className('plugin-activity-subtitle ng-star-inserted')).getText().then(function(text) {
              console.log(text);
          });

          element(by.name('Continue to Next Activity')).click().then(function() {
              browser.sleep(30000);
              element(by.className('plugin-activity-subtitle ng-star-inserted')).getText().then(function(text) {
                  console.log(text);
              });

              element(by.name('Continue to Next Activity')).click().then(function() {
                  browser.sleep(30000);
                  element(by.className('plugin-activity-subtitle ng-star-inserted')).getText().then(function(text) {
                      console.log(text);
                  });

                  element(by.name('Continue to Next Activity')).click().then(function() {
                      browser.sleep(30000);
                      element(by.className('plugin-activity-subtitle ng-star-inserted')).getText().then(function(text) {
                          console.log(text);
                      });

                      element(by.name('Continue to Next Activity')).click().then(function() {
                          browser.sleep(30000);
                          //it will print Simulation: Pre-work
                             element(by.className('plugin-activity-subtitle ng-star-inserted')).getText().then(function(text) {
                              console.log(text);
                              element(by.name('Continue to Next Activity')).click().then(function(){
                                browser.sleep(30000);
                                // it will print "Industry Expert: Understanding the value chain"
                                element(by.className('plugin-activity-subtitle ng-star-inserted')).getText().then(function(text) {
                                  console.log(text);
                                  element(by.name('Continue to Next Activity')).click().then(function(){browser.sleep(30000)});
                                  //it will print Simulation: Introduction to round 1
                                  element(by.className('plugin-activity-subtitle ng-star-inserted')).getText().then(function(text) {
                                    console.log(text);
                                    element(by.name('Continue to Next Activity')).click().then(function(){browser.sleep(30000)});
                                    element(by.className('plugin-activity-subtitle ng-star-inserted')).getText().then(function(text){console.log(text)});

                                    // from here we have to write isomer code 
                                     element(by.className('plugin-simlaunch-btn')).click().then(function(){browser.sleep(20000)});
                                     browser.switchTo().frame(element(By.xpath("//object[@class='isomer-object']")).getWebElement());
                                     element(by.id('closeInstructionsButtonText')).click().then(function(){browser.sleep(10000)});

                                      });
                                  });
                                 
                              });
                          });
                      });
                  });
              });
          });
      });
  });
});