'use strict';

/**
 * @ngdoc function
 * @name unittestApp.controller:GoogleSearchCtrl
 * @description
 * # GoogleSearchCtrl
 * Controller of the unittestApp
 */
angular.module('unittestApp')
  .controller('geoNameSearchCtrl', ['$scope', 'geoNameService', function ($scope, geoNameService) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.searchGeoname = function () {
      geoNameService.countryInfo();
    };

    $scope.searchGeoname();
  }]);
