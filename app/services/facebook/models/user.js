'use strict';

module.exports = User;

function User() {
	const vm = this;

	vm.create = create;

	var id = '';
	var name = '';

	function create(fbResponseData) {
		vm.id = fbResponseData.id;
		vm.name = fbResponseData.name;
	}

}