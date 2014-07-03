'use strict';

/**
 * @ngdoc service
 * @name unittestApp.googleSearch
 * @description
 * # googleSearch
 * Factory to make Search calls to Google.
 */
angular.module('unittestApp')
  .factory('googleSearch', ['$http', function ($http) {

    var googleSearchUrl = 'https://ajax.googleapis.com/ajax/services/search/web';
    var _GOOGLE_API_VER = '1.0';
    var _DEF_RESULT_SIZE = 8;

    // Public API here
    return {
      query: function (searchTerm, startIndex, rsz) {
        var config = {
          'params': {
            'v': _GOOGLE_API_VER,
            'q': (searchTerm || ''),
            'start': (startIndex || 0),
            'rsz': (rsz || _DEF_RESULT_SIZE)
          }
        };
        return $http.jsonp(googleSearchUrl, config);
      }
    };
  }]);
