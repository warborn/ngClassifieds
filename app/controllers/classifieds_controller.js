(function() {
  'use strict';

  var classifiedsCtrl = function($scope) {
    $scope.showAdmin = true;
    
    $scope.classifieds = [
      {
        title: 'Pro AngularJS',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat unde mollitia ducimus, architecto similique praesentium distinctio id reiciendis cumque possimus nostrum consequuntur, inventore iure! Similique ipsam ad iure, ab. Repellendus numquam porro nulla, reprehenderit consequuntur nesciunt voluptas aliquid. Aut, cumque.',
        price: 49,
        posted: '2015-10-24',
        contact: {
          name: 'John Doe',
          phone: '(555) 555-5555',
          email: 'johndoe@gmail.com'
        },
        categories: [
          'Books',
          'Programming'
        ],
        image: 'angular-book.jpg',
        views: 213
      },
      {
        title: 'Head First Rails',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat unde mollitia ducimus, architecto similique praesentium distinctio id reiciendis cumque possimus nostrum consequuntur, inventore iure! Similique ipsam ad iure, ab. Repellendus numquam porro nulla, reprehenderit consequuntur nesciunt voluptas aliquid. Aut, cumque.',
        price: 90,
        posted: '2013-03-11',
        contact: {
          name: 'John Doe',
          phone: '(555) 555-5555',
          email: 'johndoe@gmail.com'
        },
        categories: [
          'Books',
          'Programming'
        ],
        image: 'rails-book.jpg',
        views: 213
      },
      {
        title: 'ReactJS Essentials',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat unde mollitia ducimus, architecto similique praesentium distinctio id reiciendis cumque possimus nostrum consequuntur, inventore iure! Similique ipsam ad iure, ab. Repellendus numquam porro nulla, reprehenderit consequuntur nesciunt voluptas aliquid. Aut, cumque.',
        price: 25.90,
        posted: '2015-12-30',
        contact: {
          name: 'John Doe',
          phone: '(555) 555-5555',
          email: 'johndoe@gmail.com'
        },
        categories: [
          'Books',
          'Programming'
        ],
        image: 'react-book.jpg',
        views: 213
      },
      {
        title: 'HTML & CSS',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat unde mollitia ducimus, architecto similique praesentium distinctio id reiciendis cumque possimus nostrum consequuntur, inventore iure! Similique ipsam ad iure, ab. Repellendus numquam porro nulla, reprehenderit consequuntur nesciunt voluptas aliquid. Aut, cumque.',
        price: 37.20,
        posted: '2015-02-13',
        contact: {
          name: 'John Doe',
          phone: '(555) 555-5555',
          email: 'johndoe@gmail.com'
        },
        categories: [
          'Books',
          'Programming'
        ],
        image: 'html-book.jpg',
        views: 213
      },
      {
        title: 'Lightweight Django',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat unde mollitia ducimus, architecto similique praesentium distinctio id reiciendis cumque possimus nostrum consequuntur, inventore iure! Similique ipsam ad iure, ab. Repellendus numquam porro nulla, reprehenderit consequuntur nesciunt voluptas aliquid. Aut, cumque.',
        price: 19.99,
        posted: '2015-09-08',
        contact: {
          name: 'John Doe',
          phone: '(555) 555-5555',
          email: 'johndoe@gmail.com'
        },
        categories: [
          'Books',
          'Programming'
        ],
        image: 'django-book.jpg',
        views: 213
      },
      {
        title: 'JavaScript and JSON Essentials',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat unde mollitia ducimus, architecto similique praesentium distinctio id reiciendis cumque possimus nostrum consequuntur, inventore iure! Similique ipsam ad iure, ab. Repellendus numquam porro nulla, reprehenderit consequuntur nesciunt voluptas aliquid. Aut, cumque.',
        price: 20,
        posted: '2014-11-22',
        contact: {
          name: 'John Doe',
          phone: '(555) 555-5555',
          email: 'johndoe@gmail.com'
        },
        categories: [
          'Books',
          'Programming'
        ],
        image: 'json-book.jpg',
        views: 213
      }
    ];


  }

  classifiedsCtrl.$inject = ['$scope'];

  angular.module('ngClassifieds')
    .controller('ClassifiedsCtrl', classifiedsCtrl);
})();
