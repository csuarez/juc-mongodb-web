'use strict';

angular.module('jucMongoWebApp')
.factory('CatalogApi', function($http) {
    var instance = {};
    var URL_BASE = 'http://0.0.0.0:5000';
    $http.defaults.headers.common['Content-Type'] = 'application/json';

    instance.getCatalog = function() {
        var promise = $http.get(URL_BASE + '/catalog');
        return promise;
    };

    instance.addProduct = function(product) {
        var promise = $http.put(URL_BASE + '/catalog', product);
        return promise;
    }

    return instance;
});
