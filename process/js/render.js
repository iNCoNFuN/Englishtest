var $ = jQuery = require('jquery');
// var bootstrap = require('bootstrap');
var angular = require('angular');
var angulararia = require('angular-aria');
var angularanimate = require('angular-animate');
// var angularmotion = require('angular-motion');
var angularstrap = require('angular-strap');


(function() {
  'use strict';
  angular.module('mainWindow', ['mgcrea.ngStrap']).controller('HeadCtrl', HeadCtrl).controller('AppCtrl', AppCtrl);
  function HeadCtrl($scope) {
    //Fuentes: DroidSerif, GloriaHallelujah, Montserrat, OpenSans, Raleway, Roboto
    $scope.fuente = 'GloriaHallelujah';
  }
  function AppCtrl($scope) {
    $scope.prueba = 'Hola Mundo';
  }
})();
