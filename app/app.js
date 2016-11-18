(function () {
    'use strict';
    angular.module('myApp', ['myApp.home', 'ngRoute'])
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl : 'home/home.html',
                    controller : 'homeController',
                    controllerAs : 'ctrl'
                })
        }])
})();