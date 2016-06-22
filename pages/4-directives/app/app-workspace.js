(function() {
    'use strict';

    var app = angular.module('myApp', []);

    app.controller('directiveCtrl', directiveCtrl);
    app.directive('appFooter', directiva);
    app.directive('fileDirective', fileDirective);
    app.controller('dirCtrl',dirCtrl);

    function directiveCtrl($scope) {
        $scope.flag = false;
        $scope.message = 'Esto es una Directiva';
        $scope.names = [{
            name: 'Jani',
            country: 'Norway'
        }, {
            name: 'Hege',
            country: 'Sweden'
        }, {
            name: 'Kai',
            country: 'Denmark'
        }];
        $scope.fruits = ['mango', 'pera', 'manzana', 'cambur', 'fresa'];
        console.log($scope.names);
        $scope.x=null;
        $scope.y=null;
        $scope.total= 0;
        $scope.sum = function() {
            $scope.total = $scope.x + $scope.y;
        };
    }

    function directiva() {
        return {
            template: '<h3>Esto es una directiva: {{names[0].name}}</h3>'
        };
    }

    function fileDirective() {
        return {
            restrict: 'C',
            controller: 'dirCtrl',
            controllerAs: 'vm',
            templateUrl: 'partials/template.html'
        };
    }

    function dirCtrl() {
        var vm = this;
        vm.test = 29639263923;
    }

})();
