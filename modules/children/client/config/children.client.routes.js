'use strict';

// Setting up route
angular.module('children').config(['$stateProvider',
  function ($stateProvider) {
    // Children state routing
    $stateProvider
      .state('children', {
        abstract: true,
        url: '/children',
        template: '<ui-view/>'
      })
      .state('children.list', {
        url: '',
        templateUrl: 'modules/children/client/views/list-children.client.view.html'
      })
      .state('children.create', {
        url: '/create',
        templateUrl: 'modules/children/client/views/create-child.client.view.html',
        data: {
          roles: ['user', 'admin']
        }
      })
      .state('children.view', {
        url: '/:childId',
        templateUrl: 'modules/children/client/views/view-child.client.view.html'
      })
      .state('children.edit', {
        url: '/:childId/edit',
        templateUrl: 'modules/children/client/views/edit-child.client.view.html',
        data: {
          roles: ['user', 'admin']
        }
      });
  }
]);
