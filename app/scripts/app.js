'use strict';

/**
 * @ngdoc overview
 * @name jucMongoWebApp
 * @description
 * # jucMongoWebApp
 *
 * Main module of the application.
 */
angular
  .module('jucMongoWebApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/shop', {
        templateUrl: 'views/shop.html',
        controller: 'ShopCtrl',
        controllerAs: 'shop'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
