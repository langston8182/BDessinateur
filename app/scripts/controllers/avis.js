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

    $scope.addAvis = function() {
      serviceAjax.addAvis($scope.nom, $scope.email, $scope.commentaire, $scope.note);
      if ($scope.commentaire === null) {
        $scope.commentaire = '';
      }
      if ($scope.note === null) {
        $scope.note = 0;
      }
      $scope.loadAvis();
      $scope.dismiss();
    };

    $scope.loadAvis();
  });
