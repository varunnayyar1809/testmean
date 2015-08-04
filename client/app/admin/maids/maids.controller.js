'use strict';

angular.module('woobeeApp')
	.controller('MaidsCtrl', function ($scope, $state, MaidSer) {
		var maids = MaidSer.query(function(){
			$scope.maidsList = maids;	
			$scope.maidsList.length > 0 ? $scope.toogleShow = true : $scope.toogleShow = false;
		});
		
		// Edit Maid
		$scope.editMaid = function(id) {
			$state.go('maids.manageMaids',{id:id});
		};
		
		// Remove maid from DB
		$scope.deleteMaid = function(maid) {
			var idx = $scope.maidsList.indexOf(maid);
			var id = $scope.maidsList[idx]._id;
			$scope.maidsList.length == 0 ? $scope.toogleShow = false : $scope.toogleShow = true;
			MaidSer.delete({id:id},
				function(res){
					$scope.maidsList.splice(idx, 1);
				}, function(err) {
					console.log(err);
				}
			);
		};
		
	});
