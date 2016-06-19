(function() {
    'use strict';

    angular
        .module('myApp', ['ngRoute'])
        .config(function($routeProvider) {
            $routeProvider
                .when("/uno", {
                    templateUrl: 'pages/uno.html',
                    controller: 'myCtrlUno',
                    controllerAs: 'vm'
                })
                .when("/dos", {
                    templateUrl: 'pages/dos.html',
                    controller: 'myCtrlDos',
                    controllerAs: 'vm'
                })
                .when("/tres", {
                    templateUrl: 'pages/tres.html',
                    controller: 'myCtrlTres',
                    controllerAs: 'vm'
                });
        })
        .controller('myCtrlUno', myCtrlUno)
        .controller('myCtrlDos', myCtrlDos)
        .controller('myCtrlTres', myCtrlTres);

    function myCtrlUno() {
        var vm = this;
        vm.message = 'Esta es la página UNO';
    }
    function myCtrlDos() {
        var vm = this;
        vm.message = 'Esta es la página DOS';
    }
    function myCtrlTres() {
        var vm = this;
        vm.message = 'Esta es la página TRES';
    }
})();
