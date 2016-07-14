(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('myCtrlUno', myCtrlUno)
        .controller('myCtrlDos', myCtrlDos)
        .controller('myCtrlTres', myCtrlTres);

    function myCtrlUno() {
        var vm = this;
        vm.message = 'Esta es adasdasdasla página UNO';
    }
    function myCtrlDos() {
        var vm = this;
        vm.message = 'Esta es la pádasdasdasgina DOS';
    }
    function myCtrlTres() {
        var vm = this;
        vm.message = 'Esta es la págdasdasdasdina TRES';
    }
})();
