(function() {
  'use strict';

  var classifiedsCtrl = function($scope, $http, Classified, $mdSidenav, $mdToast) {
    $scope.showAdmin = true;

    var contact = {
      name: 'Ryan Chenkie',
      phone: '(444) 444-4444',
      email: 'ryian@gmail.com'
    };

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

    $scope.saveClassified = function(classified) {
      if(classified) {
        classified.contact = contact;
        classified.posted = new Date().toJSON().slice(0,10);
        $scope.classifieds.push(classified);
        $scope.classified = {};
        $scope.closeSidenav();
        $mdToast.show(
          $mdToast.simple()
            .content("Classified Saved!")
            .position('top, right')
            .hideDelay(3000)
        );
      }
    };
  };

  classifiedsCtrl.$inject = ['$scope', '$http', 'Classified', '$mdSidenav', '$mdToast'];

  angular.module('ngClassifieds')
    .controller('ClassifiedsCtrl', classifiedsCtrl);
})();
