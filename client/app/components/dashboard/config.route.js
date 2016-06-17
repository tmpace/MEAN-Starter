(function() {
  'use strict';

  angular
      .module('app.dashboard')
      .config(config);

  function config($stateProvider, $urlRouterProvider) {
        $stateProvider
      .state('/', {
        url: '/',
        templateUrl: 'app/components/dashboard/dashboard.html',
        controller: 'Dashboard',
        controllerAs: 'vm'
      })
  }
})(); 