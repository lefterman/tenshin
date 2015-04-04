(function (directives) {
    'use strict';
    /**
     *
     */
    directives.directive('newsItem', ['$sce', function ($sce) {
        return {
            restrict: 'EA',
            scope: {
                item : '='
            },
            templateUrl: 'views/home/newsItem.html',
            link: function (scope) {
                //scope.item.text = $sce.trustAsHtml(scope.item.text);
                console.log(['item',scope]);
            }
        }
    }]);
})(angular.module('tenshinApp.directives'));