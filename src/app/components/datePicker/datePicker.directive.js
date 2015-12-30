(function() {
  'use strict';

  angular
    .module('etventureTest')
    .directive('datePicker', datePicker);

  /** @ngInject */
  function datePicker() {
    var directive = {
      restrict: 'E',
      template: '<input type=\"text\">',
      replace: true,
      link: link
    };

    return directive;

    /** @ngInject */
    function link(scope, element, attrs) {
      jQuery.fn.datepicker.call(element); //call to jQuery UI on element
    }
  }

})();