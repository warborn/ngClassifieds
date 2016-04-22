(function() {
  'use strict';

  var classifiedsCtrl = function($scope, $http, Classified, $mdSidenav, $mdToast, $mdDialog) {
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
        $scope.categories = getCategories($scope.classifieds);
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

    $scope.deleteClassified = function(event, index, classified) {
      var confirm = $mdDialog.confirm()
            .title('Would you like to delete ' + classified.title + ' ?')
            .textContent('You can´t undo this action.')
            .ok('Yes')
            .cancel('No')
            .targetEvent(event);

      $mdDialog.show(confirm).
        then(function() {
            $scope.classifieds.splice(index, 1);
        });
    };

    function showToast(message) {
      $mdToast.show(
        $mdToast.simple()
          .content(message)
          .position('top, right')
          .hideDelay(3000)
      );
    }

    function getCategories(classifieds) {
      var categories = [];

      angular.forEach(classifieds, function(classified) {
        angular.forEach(classified.categories, function(category) {
          categories.push(category);
        });
      });

      return _.uniq(categories);
    }

  };

  classifiedsCtrl.$inject = ['$scope', '$http', 'Classified', '$mdSidenav', '$mdToast', '$mdDialog'];

  angular.module('ngClassifieds')
    .controller('ClassifiedsCtrl', classifiedsCtrl);
})();
