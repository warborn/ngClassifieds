(function() {
  'use strict';

  var classifiedFactory = function($http) {
    var factory = this;

    factory.getAll = function() {
      return $http.get('app/mock/classifieds.json')
        .then(function(response) {
          return response.data;
        });
    };

    return factory;
  };

  classifiedFactory.$inject = ['$http'];

  angular.module('ngClassifieds')
    .factory('Classified', classifiedFactory);
})();
