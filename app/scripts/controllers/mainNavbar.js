(function (module) {
    'use strict';
    module.controller('mainNavbar', ['$scope', '$element', 'navigationSrvc', function ($scope, $element, navigationSrvc) {
        var mainMenu = navigationSrvc.getMenuItems();
        $scope.menu = mainMenu;
       console.log(['main menu',mainMenu]);
    }]);
}(angular.module('tenshinApp')));