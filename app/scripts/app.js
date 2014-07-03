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
      .when('/google-search', {
        templateUrl: 'views/google-search.html',
        controller: 'GoogleSearchCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
