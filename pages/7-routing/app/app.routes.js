(function(){
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
                    template: '<h1>tejhldlssdklj</h1>',
                    controller: 'myCtrlTres',
                    controllerAs: 'vm'
                });
        });

})();
