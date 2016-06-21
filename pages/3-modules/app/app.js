(function() {
    'use strict';
    var app = angular.module('myApp',[]);
    app.controller('myCtrl', ['$scope', function($scope) {
        $scope.x = null;
        $scope.y = null;
        $scope.sum = function () {
            console.log('entro');
            return $scope.x + $scope.y;
        };
    }]);

})();
