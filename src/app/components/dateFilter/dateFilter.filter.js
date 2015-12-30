(function() {
  'use strict';

  angular
      .module('etventureTest')
      .filter('dateFilter', dateFilter);

  /** @ngInject */
  function dateFilter() {
    return function (items, startDateLimit, endDateLimit) {
      if (typeof startDateLimit === 'undefined' || typeof endDateLimit === 'undefined') {
        return items;
      }
      var result =[];
      items.forEach(function (item) {
        if(item.start_date >= startDateLimit && item.end_date <= endDateLimit) {
          result.push(item);
        }
      });
      return result;
    }
  }

})();
