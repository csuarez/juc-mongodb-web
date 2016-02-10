'use strict';

angular.module('jucMongoWebApp')
  .controller('ShopCtrl', function ($scope, CatalogApi) {
    $scope.catalog = [];
    $scope.newProduct = {};

    loadResults();

    $scope.addProduct = function() {
      console.log($scope.newProduct);
      CatalogApi.addProduct($scope.newProduct).then(
        function(response) {
          loadResults();
        }
      )
    }

    function loadResults() {
      CatalogApi.getCatalog().then(function(response) {
        console.log(response.data.catalog);
        $scope.catalog = response.data.catalog;
      });
    }
  });
