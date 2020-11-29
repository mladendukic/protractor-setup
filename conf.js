let SpecReporter = require('jasmine-spec-reporter').SpecReporter;

exports.config = {

  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['../protractor-setup/spec.js'],

  jasmineNodeOpts: {
    print: function () { } 
  },

  onPrepare: function () {
    jasmine.getEnv().addReporter(new SpecReporter({
      spec: {
        displayStacktrace: 'pretty'
      }
    }))
  }
};