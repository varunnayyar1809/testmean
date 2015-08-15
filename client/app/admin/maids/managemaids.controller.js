'use strict';

angular.module('woobeeApp')
  .controller('ManageMaidsCtrl', function ($scope, $state, MaidSer, $timeout, $stateParams, getMaidData, Upload) {
	
	$scope.flag = 'add';
	var id = '';
	$scope.maidData = {gender:'male', meal_type:'veg', active:'yes', cleaning:'yes', marital_status:'single', image:'default.jpg'};
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
	// Upload maid image
	$scope.$watch('file', function (file) {
      $scope.upload($scope.file);
    });
    $scope.upload = function (files) {
        if (files) {
			Upload.upload({
				url: '/api/maid/uploadimage',
				fields: {},
				file: files
			}).progress(function (evt) {
				var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
				console.log('progress: ' + progressPercentage + '% ' + evt.config.file.name);
			}).success(function (data, status, headers, config) {
				console.log('file ' + config.file.name + 'uploaded. Response: ' + data);
				$scope.maidData.image = data.imagename;
			}).error(function (data, status, headers, config) {
				console.log('error status: ' + status);
			});
		}
    };
  });
