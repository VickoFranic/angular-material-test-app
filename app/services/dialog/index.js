'use strict';

module.exports = Dialog;

const fs = require('fs');
const template = fs.readFileSync(__dirname + '/template.html');

Dialog.$inject = ['$mdDialog'];
function Dialog($mdDialog) {
	const vm = this;

	vm.show = show;

	function show() {
		$mdDialog.show({
			template: template
		});
	}

	function hide() {
		$mdDialog.hide();
	}
}