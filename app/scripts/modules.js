(function (ng) {
    'use strict';
    var APP_NAME = 'tenshinApp',
        TEMPLATE_PATH = 'views';
    ng.module(APP_NAME +'.config', []);
    ng.module(APP_NAME + '.services', [APP_NAME + '.config']);
    ng.module(APP_NAME + '.directives',[APP_NAME + '.services']);
    // config constants
    ng.module(APP_NAME + '.config').constant('appConfig', {
        // states
        states : [
                {
                    name: 'aktualis',
                    url: '/aktualis',
                    templateUrl: TEMPLATE_PATH + '/_aktualis.html',
                    controller: 'MainCtrl',
                    data: {
                        label: 'Aktuális'
                    }
                },
                {
                    name: 'karate-do',
                    url: '/karate-do',
                    templateUrl: TEMPLATE_PATH + '/_karate-do.html',
                    data: {
                        label: 'Karate-do'
                    }
                },
                {
                    name: 'tanaraink',
                    url: '/tanaraink',
                    templateUrl: TEMPLATE_PATH + '/_tanaraink.html',
                    data: {
                        label: 'Tanáraink'
                    }
                },
                {
                    name: 'rolunk',
                    url: '/rolunk',
                    templateUrl: TEMPLATE_PATH + '/_rolunk.html',
                    data: {
                        label: 'Rólunk'
                    }
                },
                {
                    name: 'blog',
                    url: '/blog',
                    templateUrl: TEMPLATE_PATH + '/_blog.html',
                    data: {
                        label: 'Blog'
                    }
                }
        ]
    });
}(angular));