describe('Season 1 test suite',function()
{
    it ('test case',function()
    {
        
        browser.get('https://microsoftprod.btsmomenta.com');

        expect(browser.getTitle()).toEqual('Momenta');
        
        browser.driver.manage().window().maximize();

        browser.ignoreSynchronization = true;

        element(by.id('userEmail')).sendKeys('m302@microsoft.com');
  
        element(by.id('password')).sendKeys('ABab12$');
  
        element(by.name('Login')).click().then(function() { browser.sleep(20000)});
  
        element(by.name('Select your industry')).element(by.css("option[value='fc9868e7db79063f9808']")).click().then(function() {browser.sleep(10000)});
  
        element(by.name('Continue')).click().then(function() { browser.sleep(20000)});
  
        element(by.id('mat-radio-2')).click();
  
        element(by.name('Continue to Next Activity')).click().then(function() {browser.sleep(5000)});

        //account code 
        element.all(by.className('plugin-single__text')).first().click().then(function() 
        {
            element(by.name('Continue to Next Activity')).click().then(function() {browser.sleep(5000)});
            browser.sleep(5000)
        });

        //radio button code 
        element(by.id('mat-radio-16')).click().then(function() {browser.sleep(2000)});
        element(by.id('mat-radio-21')).click().then(function() {browser.sleep(2000)});
        element(by.id('mat-radio-31')).click().then(function() {browser.sleep(3000)}).then(function()
        { element(by.id('mat-radio-37')).click().then(function() {browser.sleep(3000)});});
        element(by.id('mat-radio-37')).click().then(function() {browser.sleep(3000)});
        element(by.id('mat-radio-41')).click().then(function() {browser.sleep(2000)});
        element(by.id('mat-radio-46')).click().then(function() {browser.sleep(2000)});
        element(by.id('mat-radio-51')).click().then(function() {browser.sleep(2000)});
        element(by.id('mat-radio-26')).click().then(function() 
        {
            element(by.name('Continue to Next Activity')).click().then(function() { browser.sleep(5000)});
            browser.sleep(10000);
        });
        
        // thank you screen  
        element(by.name('Continue to Next Activity')).click().then(function() 
        {
            browser.sleep(30000);
            element(by.className('plugin-activity-subtitle ng-star-inserted')).getText().then(function(text) 
            {
                console.log(text);
            });

        // back button code and season 1 clicking code 
        element(by.xpath('//i[contains(@class,"pv-icon pv-icon-left-arrow plugin-back")]')).click().then(function(){browser.sleep(10000)});
        element(by.xpath('(//span[contains(@class,"plugin-common__btn-start__text")])[8]')).click().then(function(){browser.sleep(20000)});

        //from here we have to write isomer code 
        element(by.className('plugin-simlaunch-btn')).click().then(function(){browser.sleep(20000)});
        browser.switchTo().frame(element(By.xpath("//object[@class='isomer-object']")).getWebElement());
        element(by.id('closeInstructionsButtonText')).click().then(function(){browser.sleep(20000)});
        //descision summary 
        element(by.id('summaryBtnText')).click().then(function(){browser.sleep(5000)});
        element(by.xpath('(//isma-text-output[@key="Close Summary"][contains(.,"Close Summary")])[1]')).click().then(function(){browser.sleep(20000)});
        //Org Chart
        element(by.id('orgChartBtnText')).click().then(function(){browser.sleep(5000)});
        element(by.xpath('(//isma-text-output[@key="Close Org Chart"])[1]')).click();
        //Case Study
        element(by.id('caseStudyBtnText')).click().then(function(){
            browser.sleep(10000);
            browser.getAllWindowHandles().then(function (handles) {
                   browser.driver.switchTo().window(handles[1]);
                   browser.driver.close();
                   browser.driver.switchTo().window(handles[0]);
                   browser.switchTo().frame(element(By.xpath("//object[@class='isomer-object']")).getWebElement());
                   browser.sleep(10000)});
        //Instructions
        element(by.xpath('//*[contains(text(),"Instructions")]')).click().then(function(){browser.sleep(5000)});
        element(by.id('closeInstructionsButtonText')).click().then(function(){browser.sleep(10000)});
        //Get Support
        //element(by.id('supportBtnText')).click().then(function(){
        //browser.sleep(20000);
        console.log("Completed with Isomer Menu");

        element(by.xpath('//div[@class="submit-btn__text"][contains(.,"Submit")]')).click().then(function(){browser.sleep(5000)});
        element(by.xpath('(//span[contains(.,"Continue")])[2]')).click().then(function(){browser.sleep(5000)});
        element(by.xpath('//span[contains(.,"Negotiate favorable pricing agreements with new and existing midstream operators")]')).click();
        element(by.xpath('//span[contains(.,"Leverage AI analysis to hedge oil sales through trading desk")]')).click();
        element(by.xpath('(//span[contains(.,"Use real-time dashboards to manage the existing business")])[2]')).click();
        element(by.xpath('(//span[contains(.,"Improve awareness and compliance  for proper use of safety gear (training/awareness)")])[2]')).click();
        element(by.xpath('(//span[contains(.,"Implement AI analysis to identify future risk factors")])[2]')).click();

        element(by.xpath('//div[@class="submit-btn__text"][contains(.,"Submit")]')).click().then(function(){browser.sleep(5000)});
        element(by.xpath('//*[contains(text(),"Continue")]')).click();

        element(by.xpath('//span[contains(@id,"radioText0")]')).click();
        element(by.xpath('//div[@class="submit-btn__text"]')).click().then(function(){browser.sleep(5000)});
        element(by.xpath('//*[contains(text(),"Continue")]')).click();

        element(by.xpath('//span[contains(@id,"radioText1")]')).click();
        element(by.xpath('//div[@class="submit-btn__text"]')).click().then(function(){browser.sleep(5000)});
        element(by.xpath('//*[contains(text(),"Continue")]')).click();

        element(by.xpath('//span[@id="radioText0"]')).click();
        element(by.xpath('//div[@class="submit-btn__text"]')).click().then(function(){browser.sleep(5000)});
        element(by.xpath('//*[contains(text(),"Continue")]')).click().then(function(){browser.sleep(20000)});


        // out from isomer frame 
        // MainContainer
        //browser.switchTo().frame(element(By.id('MainContainer')).getWebElement());

        //here it will print Simulation : Round 1 
        element(by.name('Continue to Next Activity')).click().then(function() 
        {
            browser.sleep(30000);
            element(by.className('plugin-activity-subtitle ng-star-inserted')).getText().then(function(text) 
            {
                console.log(text);
            });
        });

        

        });
    });
});
});