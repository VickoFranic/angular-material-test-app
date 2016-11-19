'use strict';

const fs = require('fs');

const MODULE_NAME = 'info';
module.exports = MODULE_NAME;

angular.module(MODULE_NAME, [])
	   .config(config)
	   .controller('InfoController', require('./controller.js'));

config.$inject = ['$stateProvider'];
function config($stateProvider) {
    $stateProvider
	    .state('info', {
	        url: '/info',
            template: fs.readFileSync(__dirname + '/template.html', 'utf8')
    });
}