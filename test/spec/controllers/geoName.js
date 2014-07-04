'use strict';

describe('Controller: GoogleSearchCtrl', function () {

  // load the controller's module
  beforeEach(module('unittestApp'));

  var GoogleSearchCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GoogleSearchCtrl = $controller('GoogleSearchCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
