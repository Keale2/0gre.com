'use strict';

angular
  .module('0grecomApp', [
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
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/things', {
        templateUrl: 'views/things.html',
        controller: 'ThingsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
