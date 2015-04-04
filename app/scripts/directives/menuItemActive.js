/**
 *
 */
(function(directives){
    'use strict';
    directives.directive('menuItemActive',['navigationService', function(navService) {
        return {
            restrict : 'A',
            scope : true,
            link : function (scope, element, attr) {
                var activeClassName = attr.menuItemActive || 'active';
                var routeStr = attr.href;
                console.log('href:'+routeStr);
                scope.isActive = function () { return navService.isActive(routeStr); };
            }
        };
    }]);
}(angular.module('tenshinApp.directives')));