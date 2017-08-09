'use strict';

/**
 * @ngdoc overview
 * @name bdessinateurApp
 * @description
 * # bdessinateurApp
 *
 * Main module of the application.
 */
angular
  .module('bdessinateurApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/plans', {
        templateUrl: 'views/plans.html',
        controller: 'PlansCtrl',
        controllerAs: 'plans'
      })
      .when('/permis', {
        templateUrl: 'views/permis.html',
        controller: 'PermisCtrl',
        controllerAs: 'permis'
      })
      .when('/metres', {
        templateUrl: 'views/metres.html',
        controller: 'MetresCtrl',
        controllerAs: 'metres'
      })
      .when('/tarifs', {
        templateUrl: 'views/tarifs.html',
        controller: 'TarifsCtrl',
        controllerAs: 'tarifs'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'contact'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'contact'
      })
      .when('/logo', {
        templateUrl: 'views/logo.html',
        controller: 'LogoCtrl',
        controllerAs: 'logo'
      })
      .when('/avis', {
        templateUrl: 'views/avis.html',
        controller: 'AvisCtrl',
        controllerAs: 'avis'
      })
      .otherwise({
        redirectTo: '/'
      });

      $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
      });
      $locationProvider.hashPrefix = '!';
  });
