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

    $scope.selectedCountry = undefined;
    $scope.allCountries = [];
    $scope.earthquakeInfoList = [];

    $scope.searchGeoname = function () {
      $scope.allCountries = [];
      angular.element('select option[value=""]').html('Loading...');
      geoNameService.countryInfo()
        .success(function (response, status) {
          if(status === 200) {
            $scope.allCountries = response.geonames;
            angular.element('select option[value=""]').html('Select a country');
          }
        })
        .error(function () {
          $scope.allCountries = [];
          angular.element('select option[value=""]').html('Error loading country list..');
        });
    };

    $scope.countryChanged = function () {
      $scope.earthquakeInfoList = [];
      if ($scope.selectedCountry) {
        var country = $scope.selectedCountry;
        geoNameService.earthquakeInfo(country.north, country.south, country.east, country.west)
          .success(function (response, status){
            if (status === 200) {
              $scope.earthquakeInfoList = response.earthquakes;
            }
          })
          .error(function (){
            $scope.earthquakeInfoList = [];
          });
      }
    };

    $scope.searchGeoname();
  }]);
