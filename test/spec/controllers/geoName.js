'use strict';

describe('Controller: geoNameSearchCtrl', function () {

  // load the controller's module
  beforeEach(module('unittestApp'));

  var GoogleSearchCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GoogleSearchCtrl = $controller('geoNameSearchCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
