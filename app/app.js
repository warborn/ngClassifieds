'use strict';

angular.module('ngClassifieds', ['ngMaterial', 'ui.router'])
  .config(function($mdThemingProvider, $stateProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('teal')
      .accentPalette('orange');

    $stateProvider
      .state('classifieds', {
        url: '/classifieds',
        templateUrl: 'app/templates/classifieds/classifieds.html',
        controller: 'ClassifiedsCtrl as vm'
      });
  });
