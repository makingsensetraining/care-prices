// karma.conf.js 
module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],
 
    files: [
	    'bower_components/angular/angular.js',
	    'bower_components/angular-mocks/angular-mocks.js',
	    'bower_components/angular-animate/angular-animate.js',
	    'bower_components/angular-route/angular-route.js',
	    'bower_components/ng-table/dist/ng-table.js',
	    'public/js/vendor/**/*.js',
	    'public/test/mock/**/*.js',
	    'public/test/spec/**/*.js'
	]
  });
};