(function(module){
    'use strict';
    module.directive('tsMainNavbar', function() {
        
        return {
            restrict: 'A',
            //templateUrl: 'views/navbar.html',
            //require: '^mainNavbar',
            controller: 'mainNavbar',
            //controllerAs : 'ctrl',
            link: function (scope, element) {
                /*scope.menu = {
                    items: [
                        {
                            'url' : 'aktualis',
                            'label' : 'Aktuális'
                        },
                        {
                            'url' : 'karate-do',
                            'label' : 'Karate-do'
                        }
                    ],
                    current: function() {return 0;}
                    
                };*/
                console.log(scope.menu);
               // element.addClass('btn');
            }
        };
    });
})(angular.module('tenshinApp.directives'));
