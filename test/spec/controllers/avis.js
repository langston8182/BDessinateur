'use strict';

describe('Controller: AvisCtrl', function () {

  // load the controller's module
  beforeEach(module('bdessinateurApp'));

  var AvisCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AvisCtrl = $controller('AvisCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AvisCtrl.awesomeThings.length).toBe(3);
  });
});
