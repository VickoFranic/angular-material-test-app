'use strict';

module.exports = NavigationController;

NavigationController.$inject = ['$mdSidenav'];
function NavigationController($mdSidenav) {
	const vm = this;

	vm.toggle = toggle;

	function toggle() {
		$mdSidenav('menu', true).toggle();
	}
}