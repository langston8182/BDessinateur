'use strict';

/**
 * @ngdoc service
 * @name bdessinateurApp.serviceAjax
 * @description
 * # serviceAjax
 * Factory in the bdessinateurApp.
 */
angular.module('bdessinateurApp')
  .factory('serviceAjax', function ($http) {
    // Public API here
    return {
      avis: function () {
        return $http.get('http://127.0.0.1:3000/avis').then(function (response) {
          console.log("gfjslkgjfdklg");
          return response.data;
        });
      },
    };
  });
