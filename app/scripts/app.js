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
        'tenshinApp.services',
        'tenshinApp.directives'
      ])
        .config(function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise("/aktualis");
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
                });
        });
})();