(function() {
    'use strict';

    angular
        .module('myApp', [])
        .controller('myCtrl', myCtrl)
        .service('myService', myService);

        myService.$inject = ['myService'];
        function myCtrl(myService) {
            var vm = this;
            vm.error = true;
            vm.searching = false;
            vm.getUser = function() {
                vm.searching = true;
                myService.getData(vm.username).then(
                    function(response) {
                        vm.searching = false;
                        if (response.data.login === "null") {
                            vm.error = true;
                        } else {
                            vm.user = response.data;
                            vm.error = false;
                        }
                    },
                    function(error) {
                        vm.searching = false;
                        vm.error = error;
                    }
                );
            };
        }

        myService.$inject = ['$http'];
        function myService($http){
            var vm = this;
            vm.username = null;
            vm.getData = function(username){
                return $http.get("https://api.github.com/users/"+username);
            };
        }
})();
