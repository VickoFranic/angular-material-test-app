'use strict';

var app = angular.module('app', 
	[
		// Vendor dependecies
		'ngMaterial',
		'ngMdIcons',
		'ui.router',

		// Custom dependencies
		require('./modules/home'),
		require('./modules/info')
	])
	.directive('appMenu', require('./directives/menu'))
	.service('Dialog', require('./services/dialog'))

app.config(['$locationProvider', 
	function($locationProvider) {
		$locationProvider.html5Mode(true);
	}
]);