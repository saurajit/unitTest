'use strict';

describe('Service: googleSearch', function () {

  // load the service's module
  beforeEach(module('unittestApp'));

  // instantiate service
  var geoNameService;
  beforeEach(inject(function (_geoNameService_) {
    geoNameService = _geoNameService_;
  }));

  it('should do something', function () {
    expect(!!geoNameService).toBe(true);
  });

});
