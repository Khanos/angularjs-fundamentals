(function() {
    'use strict';

    angular
        .module('myApp', [])
        .controller('myCtrl', function($location) {
            var vm = this;
            var model = [
                {
                    "id": 0,
                    "username": "epilef",
                    "password": "123456",
                    "message": "Bienvenido Admin"
                },
                {
                    "id": 1,
                    "username": "pedro",
                    "password": "123",
                    "message": "Bienvenido User"
                },
                {
                    "id": 2,
                    "username": "juan",
                    "password": "123-456",
                    "message": "Bienvenido Invitado"
                }
            ];
            vm.form = {};
            vm.logIn = logIn;
            vm.getUser = getUser;

            function getUser(name) {
                for (var i = 0; i < model.length; i++) {
                    if (model[i].username === name) {
                        return model[i];
                    }
                }
            }

            function logIn() {
                var user = vm.getUser(vm.form.username);
                if (user) {
                    if (user.password === vm.form.password) {
                        alert(user.message);
                    } else {
                        alert('Contraseña Invalida');
                    }
                } else {
                    alert('No existe el usuario:  '+ vm.form.username);
                }

            }
    });
})();
