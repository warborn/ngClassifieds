(function() {
  'use strict';

  var classifiedsCtrl = function($scope, $http, Classified) {
    $scope.showAdmin = true;

    Classified.getAll()
      .then(function(classifieds) {
        $scope.classifieds = classifieds;
      });
  };

  classifiedsCtrl.$inject = ['$scope', '$http', 'Classified'];

  angular.module('ngClassifieds')
    .controller('ClassifiedsCtrl', classifiedsCtrl);
})();
