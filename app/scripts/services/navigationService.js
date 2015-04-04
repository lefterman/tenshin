/**
 * tenshinApp.services.navigationService
 * @
 */
(function(services){
   'use strict';
    services.factory('navigationService', ['$location', '$rootScope', function($location, $rootScope) {
        console.log('Navigation service has been created');
        var currentRoute = null;
        var navItems = [
            {
                'url' : 'aktualis',
                'label' : 'Aktuális'
            },
            {
                'url' : 'karate-do',
                'label' : 'Karate-do'
            },
            {
                'url' : 'tanaraink',
                'label' : 'Tanáraink'
            },
            {
                'url' : 'rolunk',
                'label' : 'Rólunk'
            },
            {
                'url' : 'blog',
                'label' : 'Blog'
            }
        ];
        /**
         * Extracts route components from the given string
         * @param {String}
         * url sample
         * http://users.atw.hu/tenshin/index.php?page=karate-do#goju-ryu
         */
        function extractRoute (route) {
            var page='',
                subpage='',
                tks;
            if (typeof route === 'string') {
                tks = route.split('#');
                if (tks.length > 1) {
                    page = tks[1];
                }
            }    
            else if(typeof route === 'object'){
                page = route.url();
            }
            return {
                page: page,
                subpage: subpage
            };
        }
        var getCurrentRoute =  function(reset) {
            if(!currentRoute || angular.isDefined(reset)) { 
                currentRoute = extractRoute($location);
            }
            //console.log('current route:'+currentRoute);
            return currentRoute;
        };

        var servObj = {
            items: navItems,
            isActive: function (routeStr) {
                return angular.equals(getCurrentRoute(),extractRoute(routeStr));        
            },
            getPage : function () {
                var route = getCurrentRoute();
                if (typeof route === 'object') {
                    return route.page;
                }
                return undefined;
            }
        };
            
        $rootScope.$on('$locationChangeSuccess',function(){
            getCurrentRoute(true);
            console.log('route changed:'+ JSON.stringify(currentRoute));
        });
        return servObj; 
    }]);
}(angular.module('tenshinApp.services')));  