(function() {
    'use strict';

    angular
        .module('myApp', [])
        .controller('myCtrl', function($scope) {
            $scope.quantity = 1;
            $scope.price = 5;
            $scope.fruits = ['mango', 'pera', 'manzana', 'cambur', 'fresa'];
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
            $scope.x = null;
            $scope.y = null;
            $scope.calculate = function() {
                $scope.sum = $scope.x + $scope.y
                return $scope.sum;
            }
        })
        .directive("myDirective", function() {
        return {
            template: "<h1>Contruida con una directiva personalizada</h1>"
        };
    });

})();
