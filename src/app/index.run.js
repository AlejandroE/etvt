(function() {
  'use strict';

  angular
    .module('etventureTest')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
