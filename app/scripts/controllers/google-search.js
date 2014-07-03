'use strict';

/**
 * @ngdoc function
 * @name unittestApp.controller:GoogleSearchCtrl
 * @description
 * # GoogleSearchCtrl
 * Controller of the unittestApp
 */
angular.module('unittestApp')
  .controller('GoogleSearchCtrl', ['$scope', 'googleSearch', function ($scope, googleSearch) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.searchGoogle = function () {
      googleSearch.query('angular testing');
    };
  }]);
