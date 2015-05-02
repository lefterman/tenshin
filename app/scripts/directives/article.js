(function(ng){
    'use strict';
    var directives = ng.module('tenshinApp.directives');
    directives.directive('article', function() {
        return {
            restrict : 'AE',
            scope : {
                article : '='
            },
            template : 'views/_article.html',
            link : function (scope) {
                
            }
        };
    });
}(angular));