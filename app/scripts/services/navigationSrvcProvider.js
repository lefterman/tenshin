/**
 * tenshinApp.services.navigationService
 * @
 */
(function (ng) {
    'use strict';
   // var services = angular.module('tenshinApp');
        
    var app = ng.module('tenshinApp.services');
    console.log([app, 'nav serv']);
    app.provider('navigationSrvc', function () {
        
        var provider = {},
            appStates = [];

        function setStates (states) {
            appStates = states;
        }
        
        function menuItemMap(stateItem) {
            return {
                name: stateItem.name,
                label: stateItem.data.label
            };
        }
        
        var getMenuItems = function () {
            var items;
            if (items === undefined) {
                items = appStates.map(menuItemMap);
            }
            return items;
        };

        var getStates = function () {
            return appStates;
        };
        
        provider.setStates = setStates;
        provider.$get = function () {
            var service = {};
            service.getStates = getStates,
            service.getMenuItems = getMenuItems
            return service;
        };
        return provider;
    });
}(angular));