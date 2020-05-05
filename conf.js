exports.config = {

  //directConnect: true,
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['Season1r4_demo.js'],
  jasmineNodeOpts: {
    defaultTimeoutInterval: 600000,
    showColors: true,
    includeStackTrace: false,
},
  allScriptsTimeout: 20000,
  getPageTimeout: 15000,
  chromeDriver: 'C:\chromedriver.exe'
}