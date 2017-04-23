var angular = require('angular');
var angulararia = require('angular-aria');
var angularanimate = require('angular-animate');

(function() {
  'use strict';
  angular.module('mainWindow', []).controller('HeadCtrl', HeadCtrl).controller('AppCtrl', AppCtrl);
  function HeadCtrl($scope) {
    //Fuentes: DroidSerif, GloriaHallelujah, Montserrat, OpenSans, Raleway, Roboto
    $scope.fuente = 'Raleway';
  }
  function AppCtrl($scope) {
    $scope.prueba = 'Hola Mundo';
  }
})();
