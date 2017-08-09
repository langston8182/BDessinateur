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
          return response.data;
        });
      },

      addAvis: function(nom, email, commentaire, note) {
        return $http.get('http://localhost:3000/addAvis?nom=' + nom + '&email=' + email + '&commentaire=' + commentaire + '&note=' + note);
      }
    };
  });
