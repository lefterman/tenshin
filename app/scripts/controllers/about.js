'use strict';

/**
 * @ngdoc function
 * @name tenshinApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the tenshinApp
 */
angular.module('tenshinApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
