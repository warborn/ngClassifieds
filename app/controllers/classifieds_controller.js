(function() {
  'use strict';

  var classifiedsCtrl = function($scope, $http, Classified, $mdSidenav) {
    $scope.showAdmin = true;

    Classified.getAll()
      .then(function(classifieds) {
        $scope.classifieds = classifieds;
      });

    $scope.openSidenav = function() {
      $mdSidenav('left').open();
    };

    $scope.closeSidenav = function() {
      $mdSidenav('left').close();
    };
  };

  classifiedsCtrl.$inject = ['$scope', '$http', 'Classified', '$mdSidenav'];

  angular.module('ngClassifieds')
    .controller('ClassifiedsCtrl', classifiedsCtrl);
})();
