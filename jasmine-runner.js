var Jasmine      = require('jasmine');
var SpecReporter = require('jasmine-spec-reporter');

var jrunner = new Jasmine();
jrunner.env.clearReporters();
jrunner.addReporter(new SpecReporter()); // add jasmine-spec-reporter
jrunner.loadConfigFile();                // load jasmine.json configuration
jrunner.execute();
