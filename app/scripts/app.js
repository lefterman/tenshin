(function () {
    'use strict';

    /**
     * @ngdoc overview
     * @name tenshinApp
     * @description
     * # tenshinApp
     *
     * Main module of the application.
     */
    angular
        .module('tenshinApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'ui.router',
        'tenshinApp.config',
        'tenshinApp.services',
        'tenshinApp.directives'
      ])
        .config(['$stateProvider', '$urlRouterProvider','navigationSrvcProvider','appConfig', function ($stateProvider, $urlRouterProvider, navigationSrvc, appConfig) {
            
            $urlRouterProvider.otherwise("/aktualis");
            var states = appConfig.states;
            states.forEach(function (stateItem) {
                $stateProvider.state(stateItem.name,stateItem);
            });
            navigationSrvc.setStates (states);
            /*
            $stateProvider
                .state('home', {
                    url: '/aktualis',
                    controller: 'MainCtrl',
                    templateUrl: "views/_aktualis.html"
                    
                })
                .state('karate-do', {
                    url: "/karate-do",
                    templateUrl: "views/_karate-do.html",
                    controller: function ($scope) {
                        $scope.items = ["A", "List", "Of", "Items"];
                    }
                });*/
        }]);
})();