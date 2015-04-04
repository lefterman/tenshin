(function (module) {
    console.log('news controller');
    'use strict';
    module.controller('newsCtrl', ['$scope', 'newsSrvc', function ($scope, newsSrvc) {
        $scope.news = [];
        function handleError(err) {
            console.error(err);
        }
        function resolveNews() {
            var promise = newsSrvc.getNews();
            promise.then(function (response) {
                $scope.news = response || [];
            }, function (err) {
                handleError(err);
            });
        }
        function init() {
            resolveNews();
        }
        
        init();
    }]);
}(angular.module('tenshinApp')));