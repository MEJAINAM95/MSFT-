describe("Registration and Login end to end Scenario",function()
{
          appURL='http://amasik.com/demo/angularjs/angular-app';
          browser.get(appURL);
     it("register new user to application",function(){
         browser.driver.manage().window().maximize().then(function(){
             browser.sleep(3000);
         })
         element(by.xpath('//a[@href="#/signup"]')).click();
         browser.findElement(by.name('firstname')).sendKeys('Hello')
         browser.findElement(by.name('lastname')).sendKeys('Testing')
         browser.findElement(by.name('email')).sendKeys('HelloTesting@test.com')
         browser.findElement(by.name('password')).sendKeys('1234567')
         browser.findElement(by.id('confirm_password')).sendKeys('1234567')  
         browser.findElement(by.xpath('//label[text()="Agree with the Terms & Conditions."]')).click()
         browser.findElement(by.buttonText('Register')).click()
         browser.driver.sleep(4000)
         browser.findElement(by.partialLinkText('Login to your account')).click()
     });
     /*it("Login to Application",function(){
         browser.findElement(by.model('login.email')).clear()
         browser.findElement(by.model('login.email')).sendKeys('HelloTesting@test.com')
         browser.findElement(by.model('login.password')).sendKeys('1234567')
         //browser.findElement(by.ClassName('class="field login-checkbox"')).click()
         //browser.findElement(by.buttonText('Sign In')).click()
         browser.findElement(by.className('button btn btn-success btn-large')).click()
         browser.driver.sleep(4000)
     });*/
});
