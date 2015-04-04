/*
(function (){
    'use strict';
    var navigationService,
        $rootScope,
        locationMock = {
            url : function() { return '/karate-do'; },
            hash : 'goju-ryu'
        },
        testUrl1 = 'http://users.atw.hu/tenshin/index.php?page=karate-do#goju-ryu',
        testUrl2 = '/#/karate-do';
    describe('Service: navigationService', function (){
        // injecting dependencies
        beforeEach(function(){
            // defining the module for the service
            module('tenshinApp.services');
            // providing mock location service
            module(function($provide) {
                $provide.value('$location',locationMock);
            });
            // injecting the navigation service and its $document dependency
            inject(function(_navigationService_,_$rootScope_){
                navigationService = _navigationService_;
                $rootScope = _$rootScope_;
            });
        });
        
        it('Should retrieves the expected page: karate-do', function() {
            console.log('current page:' + navigationService.getPage());
            expect(navigationService.getPage()).toEqual('/karate-do');
        });
        
        it('Sould be active when the location is: http://users.atw.hu/tenshin/index.php?page=karate-do#goju-ryu', function() {
            expect(navigationService.isActive(testUrl2)).toBe(true);
        });
    });
}());*/