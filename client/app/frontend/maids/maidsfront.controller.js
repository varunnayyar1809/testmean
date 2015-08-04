'use strict';

angular.module('woobeeApp')
        .controller('maidsFrontCtrl', function ($scope, $state, MaidSer, $timeout, $stateParams,MaidFrontSer) {
            $scope.maids="";
          var entries = MaidFrontSer.query(function() {
            $scope.maids = entries;
          }); 
          $scope.search_maid = function(){
              //alert($scope.maid.name);
              
              MaidFrontSer.save($scope.maid, function(data) {
                $scope.maids = data;
              }); //saves an entry. Assuming $scope.entry is the Entry object  
              
          };
            

        });
