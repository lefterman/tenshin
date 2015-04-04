(function () {
    'use strict';
    angular.module('tenshinApp.services', []);
    console.log('services');
    angular.module('tenshinApp.directives',['tenshinApp.services']);
    console.log('directives');
}());