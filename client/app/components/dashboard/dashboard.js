(function() {
  'use strict'

  angular
      .module('app.dashboard')
      .controller('Dashboard', Dashboard)

  // Dashboard.$inject(...);

  function Dashboard() {
    var vm = this;

    vm.title = 'Hello, world!';
  }
})();
