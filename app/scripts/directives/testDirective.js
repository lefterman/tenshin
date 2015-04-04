(function(directives){
    'use strict';
    directives.directive('testDirective', ['testService', function(testService) {
        function getLabel () {
            console.log('called');
            return testService.data.testValue;
            
        }
        return {
            restrict:'A',
            scope:true,
            controller: function ($scope) {
                $scope.result = testService.data;
                $scope.result = function() {return testService.getTestValue();};
                //testService.data.bind($scope,'label()');
            }
        };
    }]);
}(angular.module('tenshinApp.directives')));