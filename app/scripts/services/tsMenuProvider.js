(function(module) {
    'use strict';
    module.service('tsMenuProvider', function(){
        var _current = 0;
        var menu = {
            current: function(current) {  
                if (angular.isDefined(current) && current > -1 && current < this.items.length) {
                    _current = current;
                }    
                return _current;
            },
            items: [
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
            ]
        };
        return menu;
    });
})(angular.module('tenshinApp'));