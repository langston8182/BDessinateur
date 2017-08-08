'use strict';

/**
 * @ngdoc function
 * @name bdessinateurApp.controller:TarifsCtrl
 * @description
 * # TarifsCtrl
 * Controller of the bdessinateurApp
 */
angular.module('bdessinateurApp')
  .controller('TarifsCtrl', function (serviceAjax) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    serviceAjax.tarifs().then(function(response) {
    	
    });
  });
