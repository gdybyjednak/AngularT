module.exports = function(config){
	config.set({
		basePath : '../',
		files : [
		'src/js/vendor/angular.js',
		'test/lib/angular-mocks.js',
		'src/js/**/*.js',
		'test/unit/**/*.js'
		],
		autoWatch : true,
		frameworks : ['jasmine'],
		browsers : ['Chrome','Firefox'],
		plugins : ['karma-chrome-launcher',
					'karma-firefox-launcher',
					'karma-jasmine']
})};