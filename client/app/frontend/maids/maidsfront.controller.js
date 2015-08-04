'use strict';

angular.module('woobeeApp')
        .controller('maidsFrontCtrl', function ($scope, $state, MaidSer, $timeout, $stateParams,MaidFrontSer) {

          var entries = MaidFrontSer.query(function() {
            console.log(entries);
          }); 
            

        });
