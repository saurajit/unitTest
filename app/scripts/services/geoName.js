'use strict';

/**
 * @ngdoc service
 * @name unittestApp.geonameSearch
 * @description
 * # geonameSearch
 * Factory to make Search calls to Geoname.
 */
angular.module('unittestApp')
  .factory('geoNameService', ['$http', function ($http) {

    var _API_USERNAME = 'gumnam';

    var countryInfo = 'http://api.geonames.org/countryInfoJSON';

    // Public API here
    return {
      countryInfo: function (searchTerm, style, numRows) {
        var config = {
          'params': {
            'username': _API_USERNAME,
            'style': (style || 'SMALL'),
            'maxRows': (numRows || null)
          }
        };
        return $http.get(countryInfo, config);
      }
    };
  }]);
