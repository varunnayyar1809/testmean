'use strict';

angular.module('woobeeApp')
  .controller('ManageMaidsCtrl', function ($scope, $state, MaidSer, $timeout, $stateParams, getMaidData) {
	
	$scope.flag = 'add';
	var id = '';
	$scope.maidData = {gender:'male', meal_type:'veg', active:'yes', cleaning:'yes', marital_status:'single'};
	if(getMaidData) {
		$scope.maidData = getMaidData;
		$scope.flag = 'edit';
		id = $stateParams.id;
	}
	
	$state.reload = function reload() {
		$state.transitionTo($state.current, $stateParams, { reload: true, inherit: false, notify: true });
	}
	
	// Save maid data in database
		$scope.manageMaid = function() {
			if($scope.flag == 'add') {
				MaidSer.save($scope.maidData, 
				function(resp, headers){
					//success callback
					$state.go('maids');
					$timeout(function(){
						$state.reload();
					},500);
				},
				function(err){
					// error callback
					console.log(err);
				});
			} else {
				MaidSer.updateUser({id:id},$scope.maidData, 
				function(resp, headers){
					//success callback
					$state.go('maids');
					$timeout(function(){
						$state.reload();
					},500);
				},
				function(err){
					// error callback
					console.log(err);
				});
			}
		};
  });
