'use strict';

const fs = require('fs');

const MODULE_NAME = 'home';
module.exports = MODULE_NAME;

angular.module(MODULE_NAME, [])
	   .config(config)
	   .controller('HomeController', require('./controller.js'));

config.$inject = ['$stateProvider'];
function config($stateProvider) {
    $stateProvider
    	.state('home', {
	        url: '/home',
	        template: fs.readFileSync(__dirname + '/template.html'),
	        controllerAs: 'vm',
	        controller: 'HomeController'
	    });
};