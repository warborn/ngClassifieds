(function() {
  'use strict';

  var classifiedsCtrl = function($scope, $http, Classified, $mdSidenav, $mdToast, $mdDialog) {
    var vm = this;

    vm.openSidenav      = openSidenav;
    vm.closeSidenav     = closeSidenav;
    vm.saveClassified   = saveClassified;
    vm.saveEdit         = saveEdit;
    vm.editClassified   = editClassified;
    vm.deleteClassified = deleteClassified;

    vm.classified;
    vm.classifieds;
    vm.categories;
    vm.showAdmin = true;
    vm.editing = false;

    var contact = {
      name: 'Ryan Chenkie',
      phone: '(444) 444-4444',
      email: 'ryian@gmail.com'
    };

    Classified.getAll()
      .then(function(classifieds) {
        vm.classifieds = classifieds;
        vm.categories = getCategories(vm.classifieds);
      });

    function openSidenav() {
      $mdSidenav('left').open();
    };

    function closeSidenav() {
      vm.classified = {};
      $mdSidenav('left').close();
    };

    function saveClassified(classified) {
      if(classified) {
        classified.contact = contact;
        classified.posted = new Date().toJSON().slice(0,10);
        vm.classifieds.push(classified);
        vm.classified = {};
        closeSidenav();
        showToast('Classified saved!');
      }
    };

    function editClassified(classified) {
      vm.editing = true;
      vm.classified = classified;
      openSidenav();
    };

    function saveEdit() {
      vm.editing = false;
      vm.classified = {};
      closeSidenav();
      showToast('Classified updated!');
    };

    function deleteClassified(event, index, classified) {
      var confirm = $mdDialog.confirm()
            .title('Would you like to delete ' + classified.title + ' ?')
            .textContent('You can´t undo this action.')
            .ok('Yes')
            .cancel('No')
            .targetEvent(event);

      $mdDialog.show(confirm).
        then(function() {
            vm.classifieds.splice(index, 1);
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
