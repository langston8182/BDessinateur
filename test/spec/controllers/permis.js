'use strict';

describe('Controller: PermisCtrl', function () {

  // load the controller's module
  beforeEach(module('bdessinateurApp'));

  var PermisCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PermisCtrl = $controller('PermisCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PermisCtrl.awesomeThings.length).toBe(3);
  });
});
