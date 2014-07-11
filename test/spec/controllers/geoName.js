'use strict';

describe('Controller: geoNameSearchCtrl', function () {

  // load the controller's module
  beforeEach(module('unittestApp','mockCountryList'));

  var GoogleSearchCtrl,
    scope,
    mockCountryList,
    httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $httpBackend, defaultJSON) {
    scope = $rootScope.$new();
    httpBackend = $httpBackend;
    $httpBackend.whenGET("http://api.geonames.org/countryInfoJSON?style=SMALL&username=gumnam").respond(defaultJSON);

    GoogleSearchCtrl = $controller('geoNameSearchCtrl', {
      $scope: scope
    });
  }));

  afterEach(function(){
    httpBackend.verifyNoOutstandingExpectation();
    //httpBackend.verifyNoOutstandingRequest();
  });

  it('variable initialization should be initialized', function () {
    expect(scope.allCountries.length).toBe(0);
    expect(scope.earthquakeInfoList.length).toBe(0);
    expect(scope.selectedCountry).toBeUndefined();
  });

  it('geoNameService.countryInfo should load a list of countries', inject(function (geoNameService) {
    expect(scope.allCountries.length).toBe(0); //Initially the 'allCountries' array is empty
    geoNameService.countryInfo()
      .success(function (response) {
        expect(response.geonames.length).toBe(3);
        expect(response.geonames[0].countryName).toBe('Andorra');
        expect(scope.allCountries.length).toBe(3);//After the service call the 'allCountries' array should have 3 elements
      });
  }));
});