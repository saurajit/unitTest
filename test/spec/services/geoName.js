'use strict';

describe('Service: googleSearch', function () {

  // load the service's module
  beforeEach(module('unittestApp'));

  // instantiate service
  var googleSearch;
  beforeEach(inject(function (_googleSearch_) {
    googleSearch = _googleSearch_;
  }));

  it('should do something', function () {
    expect(!!googleSearch).toBe(true);
  });

});
