'use strict';

angular.module('woobeeApp')
  .controller('userHeaderCtrl', function ($scope, Auth, $state, $modal, $cookieStore) {
		
		$scope.loginBtn = $cookieStore.get('loginStatus');

		$scope.userLogin = function(currentState) {
			
			$scope.animationsEnabled = true;
			var modalInstance = $modal.open({
				templateUrl: 'app/frontend/home/loginpopup.html',
				controller: 'LoginpopupCtrl',
				resolve: {
					currentState: function() {
						return currentState;
					}
				}
			});
			modalInstance.result.then(
				function (res) {
					$cookieStore.put('loginStatus', true);
					res.status == "success" ? $scope.loginBtn = true : $scope.loginBtn = false;
				}, function (err) {
					console.log(err);
				}
			);
		};
		
		$scope.getCurrentUser = Auth.getCurrentUser;
	    $scope.logout = function() {
		  Auth.logout();
		  $scope.loginBtn = false;
		};
  });
