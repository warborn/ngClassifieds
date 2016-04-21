(function() {
  'use strict';

  var classifiedsCtrl = function($scope, $http, Classified, $mdSidenav, $mdToast) {
    $scope.showAdmin = true;
    $scope.editing = false;

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
      $scope.classified = {};
      $mdSidenav('left').close();
    };

    $scope.saveClassified = function(classified) {
      if(classified) {
        classified.contact = contact;
        classified.posted = new Date().toJSON().slice(0,10);
        $scope.classifieds.push(classified);
        $scope.classified = {};
        $scope.closeSidenav();
        showToast('Classified saved!');
      }
    };

    $scope.editClassified = function(classified) {
      $scope.editing = true;
      $scope.classified = classified;
      $scope.openSidenav();
    };

    $scope.saveEdit = function() {
      $scope.editing = false;
      $scope.classified = {};
      $scope.closeSidenav();
      showToast('Classified updated!');
    };

    function showToast(message) {
      $mdToast.show(
        $mdToast.simple()
          .content(message)
          .position('top, right')
          .hideDelay(3000)
      );
    }

  };

  classifiedsCtrl.$inject = ['$scope', '$http', 'Classified', '$mdSidenav', '$mdToast'];

  angular.module('ngClassifieds')
    .controller('ClassifiedsCtrl', classifiedsCtrl);
})();
