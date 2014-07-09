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

    var _API_USERNAME = 'gumnam'; //Use the 'username' by creating an account at http://www.geonames.org/login

    var countryInfo = 'http://api.geonames.org/countryInfoJSON',
      earthquakes = 'http://api.geonames.org/earthquakesJSON';
    var defaultParams  = {
      'username': _API_USERNAME
    };

    // Public API here
    return {
      /**
       * @ngdoc function
       * @name unittestApp.geonameSearch.countryInfo
       * @description
       * # countryInfo
       * Get all the country list from Geoname.
       */
      countryInfo: function (searchTerm, style, numRows) {
        var config = {
          'params': {
            'style': (style || 'SMALL'),
            'maxRows': (numRows || null)
          }
        };
        angular.extend(config.params, defaultParams);
        return $http.get(countryInfo, config);
      },
      /**
       * @ngdoc function
       * @name unittestApp.geonameSearch.earthquakeInfo
       * @description
       * # earthquakeInfo
       * Get earthquake information for a country from Geoname.
       */
      earthquakeInfo: function (north, south, east, west, style, numRows) {
        var config = {
          'params': {
            'style': (style || 'FULL'),
            'maxRows': (numRows || null),
            'north': north,
            'south': south,
            'east': east,
            'west': west
          }
        };
        angular.extend(config.params, defaultParams);
        return $http.get(earthquakes, config);
      }
    };
  }]);
