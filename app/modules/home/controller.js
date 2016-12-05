'use strict';

module.exports = HomeController;

HomeController.$inject = ['$scope', '$rootScope', 'Dialog', 'Facebook'];
function HomeController($scope, $rootScope, Dialog, Facebook) {
	const vm = this;

	vm.fb = Facebook;
	vm.fbLogin = fbLogin;

	function fbLogin() {
		vm.fb.facebookLogin();
	}

}