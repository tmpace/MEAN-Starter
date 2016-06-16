(function() {
  'use strict';

  angular
      .module('app')
      .config(config);

  function config($stateProvider, $urlRouterProvider) {
    // Default state
    $urlRouterProvider.otherwise('/');


    // Configure routes
    $stateProvider
      .state('/', {
        url: '/',
        templateUrl: 'app/components/dashboard/dashboard.html',
        controller: 'Dashboard',
        controllerAs: 'vm'
      })
  }
})(); 
