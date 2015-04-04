'use strict';

/**
 * @ngdoc function
 * @name tenshinApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tenshinApp
 */
angular.module('tenshinApp')
  .controller('MainCtrl', function ($scope) {
    $scope.miki = $scope.miki || {};
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    
    $scope.$watch('miki.input',function(input){
        var polarity = '';
        // input !== ''
        if (input < 0) {     
            polarity = 'negative';
        } 
        else if(input > 0) {
            polarity = 'positive';
        } 
        else {
            polarity = 'null';  
        }
        
        $scope.miki.result = polarity;
    });
  });