describe('My practice test suite',function(){
it('my test case', function()
{
browser.get('http://juliemr.github.io/protractor-demo/');

element(by.model('first')).sendKeys('2');
element(by.model('second')).sendKeys('4');
element(by.id('gobutton')).click().then(function(){
browser.sleep(5000);
});

element(by.model('first')).sendKeys('5');
element(by.model('second')).sendKeys('4');
element(by.id('gobutton')).click().then(function(){
browser.sleep(5000);
});

element(by.model('first')).sendKeys('6');
element(by.model('second')).sendKeys('4');
element(by.id('gobutton')).click().then(function(){
browser.sleep(5000);
});
 
var a = element.all(by.className('ng-binding')).first();
expect(a.getText()).toBe('6');
console.log(a.getText());


});
});
