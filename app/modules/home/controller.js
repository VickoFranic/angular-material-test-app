'use strict';

module.exports = HomeController;

HomeController.$inject = ['Dialog'];
function HomeController(Dialog) {
	const vm = this;

	vm.openDialog = openDialog;

	function openDialog() {
		Dialog.show();
	}
}