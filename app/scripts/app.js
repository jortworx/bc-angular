'use strict';

var bcAngularApp = angular.module('bcAngularApp', [])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/oralbotanica', {
            templateUrl: 'views/obmain.html',
            controller: 'OBMainCtrl'
        })
      .otherwise({
        redirectTo: '/'
      });
  }]);
