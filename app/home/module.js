(function () {
    'use strict';
    angular
        .module('myApp.home', [])
        .controller('homeController', HomeController);


    HomeController.$inject = [];
    function HomeController(){
        var vm = this;
        vm.name = 'Zheka';
    }

})();