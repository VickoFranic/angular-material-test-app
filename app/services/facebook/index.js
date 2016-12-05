'use strict';

var User = require('./models/user');

module.exports = Facebook;

Facebook.$inject = ['$window', '$q', 'Dialog'];
function Facebook($window, $q, Dialog) {

	const vm = this;

	vm.init = init;
	vm.facebookLogin = facebookLogin;
	vm.getFacebookUser = getFacebookUser;
	vm.getLoggedInUser = getLoggedInUser;

	function init() {
	  	(function(d, s, id) {
		    var js, fjs = d.getElementsByTagName(s)[0];
		    if (d.getElementById(id)) return;
		    js = d.createElement(s); js.id = id;
		    js.src = "//connect.facebook.net/en_US/sdk.js";
		    fjs.parentNode.insertBefore(js, fjs);
		}(document, 'script', 'facebook-jssdk'));

		$window.fbAsyncInit = function() {
		    FB.init({ 
		      appId: '',
		      status: true, 
		      cookie: true, 
		      xfbml: true,
		      version: 'v2.4'
		    });
		};
	}

	function facebookLogin() {
		 FB.login(function(response) {
		 	 if (response.status === 'connected') {
		 	 	var accessToken = response.authResponse.accessToken;
		 	 	vm.getFacebookUser(accessToken);

		 	 } else if (response.status === 'not_authorized') {
		 	 	//
		 	 } else {
		 	 	//
		 	 }

		 }, {scope: 'public_profile'});
	}

	function getFacebookUser(accessToken) {

		var deferred = $q.defer();
		FB.api('/me', function(response) {
	        if (!response || response.error) {
	            deferred.reject('Error occured');
	        } else {
	            deferred.resolve(response);
	        }

	        var promise = deferred.promise;
	        promise.then(function(data) {
				var user = new User();
				user.create(response);

				Dialog.showMessageToUser(user);
	        });
		});		
	}

	function getLoggedInUser() {
		FB.getLoginStatus(function(response) {
			console.log(response);
		  if (response.status === 'connected') {
		    console.log('Logged in.');
		  }
		  else {
		    console.log("No user");
		  }
		});
	}

	init();
}