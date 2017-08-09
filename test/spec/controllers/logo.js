'use strict';

describe('Controller: LogoCtrl', function () {

  // load the controller's module
  beforeEach(module('bdessinateurApp'));

  var LogoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LogoCtrl = $controller('LogoCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(LogoCtrl.awesomeThings.length).toBe(3);
  });
});
