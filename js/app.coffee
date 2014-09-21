'use strict';

angular
  .module('0grecomApp', ['ngRoute'])
    .config(["$routeProvider", ($routeProvider) ->
      $routeProvider.when("/", { templateUrl: "views/main.html", controller: "MainCtrl" })
      $routeProvider.when("/about", { templateUrl: "views/about.html", controller: "AboutCtrl" })
      $routeProvider.when("/things", { templateUrl: "views/things.html", controller: "ThingsCtrl" })
      $routeProvider.otherwise({ redirectTo: "/" })
  ])