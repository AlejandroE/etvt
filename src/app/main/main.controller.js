(function() {
  'use strict';

  angular
    .module('etventureTest')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, $http, $filter, $log) {

    $scope.reverse = false;
    $scope.predicate = 'id';
    var orderBy = $filter('orderBy');
    var dateRange = $filter('dateFilter');

    $scope.sortBy = function(predicate) {
      $scope.predicate = predicate;
      $scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;
      $scope.filteredCities = orderBy($scope.filteredCities, predicate, $scope.reverse);
    };

    $scope.filterByDate = function() {
      var startLimit = (typeof $scope.dateFrom !== 'undefined')? new Date($scope.dateFrom) : undefined;
      var endLimit = (typeof $scope.dateTo !== 'undefined')? new Date($scope.dateTo) : undefined;
      $scope.filteredCities = dateRange($scope.citiesList, startLimit, endLimit);
    };

    $http({
      method: 'GET',
      url: '/resources/data.json'
    }).then(function successCallback(response) {
      $scope.citiesList = response.data;
      response.data.forEach( function (item) {
        item.start_date = new Date(item.start_date);
        item.end_date = new Date(item.end_date);
      });
      $scope.filteredCities = $scope.citiesList;
    }, function errorCallback(response) {
      $log(response);
    });

  }
})();
