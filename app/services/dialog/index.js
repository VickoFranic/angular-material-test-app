'use strict';

module.exports = Dialog;

Dialog.$inject = ['$mdDialog'];
function Dialog($mdDialog) {
	const vm = this;

	vm.showMessageToUser = showMessageToUser;

	function showMessageToUser(user) {
      alert = $mdDialog.alert({
        title: 'Welcome to the machine !',
        textContent: user.name + ', this is an example of simple Facebook Login.',
        ok: 'Close'
      });

      $mdDialog
        .show(alert)
        .finally(function() {
          alert = undefined;
        });
	}

	function hide() {
		$mdDialog.hide();
	}
}