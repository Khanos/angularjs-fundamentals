(function() {
    'use strict';

    angular
        .module('myApp', [])
        .controller('myCtrl', myCtrl)
        .service('githubServie', githubServie);

    //myCtrl.$inject = ['githubServie'];
    function myCtrl(githubServie) {
        var vm = this;
        // Variables
        vm.username = '';

        // Funciones
        vm.search = search;

        function search() {
            githubServie.getUser(vm.username);
        }
    }

    //githubServie.$inject = [];
    function githubServie($http) {
        var vm = this;
        vm.user = {};

        vm.getUser = getUser;

        function getUser(username){
            //vm.user = $http.get("https://api.github.com/users/"+username);
            $http.get("https://api.github.com/users/"+username).then(successFunc, errorFunc);
            function successFunc(response) {
                console.log('success');
                console.log(response.status);
            }
            function errorFunc(response) {
                console.log(response);
            }

            // alert('Mostrar: ' + vm.user);
            // console.log(vm.user);
        }
    }

})();
