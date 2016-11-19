'use srict';

const fs = require('fs');

module.exports = Menu;

function Menu() {

	return {
		template: fs.readFileSync(__dirname + '/template.html'),
        controllerAs: 'vm',
        controller: require('./controller'),
        bindToController: true
	}
}