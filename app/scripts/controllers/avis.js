'use strict';

/**
 * @ngdoc function
 * @name bdessinateurApp.controller:AvisCtrl
 * @description
 * # AvisCtrl
 * Controller of the bdessinateurApp
 */
angular.module('bdessinateurApp')
  .controller('AvisCtrl', function ($scope, serviceAjax) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.avis = {};
    $scope.loadAvis = function() {
    	serviceAjax.avis().then(function(response) {
    		$scope.avis = response;
    	});
    };

    $scope.loadAvis();
  });
