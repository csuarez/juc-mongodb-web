'use strict';

angular.module('jucMongoWebApp')
  .controller('MainCtrl', function ($scope) {
    $scope.magicValue = "type me!";

    $scope.addLol = function() {
      $scope.magicValue += " lol";
    };
  });
