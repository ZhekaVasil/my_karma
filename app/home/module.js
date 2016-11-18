(function () {
    'use strict';
    angular
        .module('myApp.home', [])
        .controller('homeController', HomeController);


    HomeController.$inject = ['$scope'];
    function HomeController($scope){
        var vm = this;
        vm.name = 'Zheka';
        vm.func = al;
        vm.func('LoL');
        function al(name) {
            vm.name = name;
            return true
        }
    }

})();