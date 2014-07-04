'use strict';

angular
  .module('unittestApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/geoname', {
        templateUrl: 'views/geoname.html',
        controller: 'geoNameSearchCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
