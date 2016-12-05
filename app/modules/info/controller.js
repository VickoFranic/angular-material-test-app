'use strict';

module.exports = InfoController;

InfoController.$inject = ['Facebook'];
function InfoController(Facebook) {
	const vm = this;

	vm.fb = Facebook;

	// vm.fb.init();
}