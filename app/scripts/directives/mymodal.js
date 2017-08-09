'use strict';

/**
 * @ngdoc directive
 * @name bdessinateurApp.directive:myModal
 * @description
 * # myModal
 */
angular.module('bdessinateurApp')
  .directive('myModal', function () {
    return {
      restrict: 'A',
      link: function postLink(scope, element) {
        scope.dismiss = function() {
        	element.modal('hide');
        };
      }
    };
  });
