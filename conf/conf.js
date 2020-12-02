let SpecReporter = require('jasmine-spec-reporter').SpecReporter;

exports.config = {

  seleniumAddress: 'http://localhost:4444/wd/hub',
  suites: {
    specs: [
      '../specs/expected-conditions.js'
    ]
  },

  jasmineNodeOpts: {
    print: function () { } 
  },

  onPrepare: function(){
    jasmine.getEnv().addReporter(
      new SpecReporter({
        // Defaults: https://github.com/bcaudan/jasmine-spec-reporter#default-options
        // Configuration: https://github.com/bcaudan/jasmine-spec-reporter/blob/master/src/configuration.ts
        suite: {
          displayNumber: true,    // display each suite number (hierarchical)
        },
        spec: {
          displayPending: true,   // display each pending spec
          displayDuration: true,  // display each spec duration
        },
        summary: {
          displaySuccesses: false, // display summary of all successes after execution
          displayFailed: false,    // display summary of all failures after execution
          displayPending: false,   // display summary of all pending specs after execution
        },
      })
    );
  }
};