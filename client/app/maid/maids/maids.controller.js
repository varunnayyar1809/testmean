'use strict';

angular.module('woobeeApp')
  .controller('MaidsCtrl', function ($scope,$state,MaidSer) {
	$scope.maidsList = MaidSer.query();
	$scope.$watch(function() { 
      return $scope.maidsList;
    },
    function(){
		$scope.maidsList.length > 0 ? $scope.toogleShow = false : $scope.toogleShow = true;
    });
    
  });
