(function (module) {
    'use strict';
    module.controller('mainNavbar', ['$scope', '$element', 'tsMenuProvider', function ($scope, $element, tsMenuProvider) {
        var mainMenu = tsMenuProvider || {items: [{
            'url' : 'aktualis',
            'label' : 'Aktuális'
        }]};
        $scope.menu = mainMenu;
       console.log($element.find('a'));
    }]);
}(angular.module('tenshinApp')));