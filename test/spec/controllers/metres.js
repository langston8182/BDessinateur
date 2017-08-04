'use strict';

describe('Controller: MetresCtrl', function () {

  // load the controller's module
  beforeEach(module('bdessinateurApp'));

  var MetresCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MetresCtrl = $controller('MetresCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MetresCtrl.awesomeThings.length).toBe(3);
  });
});
