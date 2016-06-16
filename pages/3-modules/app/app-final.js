(function() {
    'use strict';

    var app = angular.module('myApp', []);

    app.controller("myCtrl", function($scope) {
        $scope.firstName = "Epilef";
        $scope.lastName = "Rodriguez";
    });

})();
