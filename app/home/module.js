(function () {
    'use strict';
    angular
        .module('myApp.home', [])
        .controller('homeController', HomeController);


    HomeController.$inject = [];
    function HomeController(){
        var vm = this;
        vm.name = 'LoL';
        vm.func = al;
        vm.func('Zheka');
        function al(name) {
            vm.name = name;
            return true
        }
    }

})();