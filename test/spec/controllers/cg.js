'use strict';

describe('Controller: CgCtrl', function () {

  // load the controller's module
  beforeEach(module('bdessinateurApp'));

  var CgCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CgCtrl = $controller('CgCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CgCtrl.awesomeThings.length).toBe(3);
  });
});
