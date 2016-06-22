'use strict';

angular.module('foodApp').controller('ItemController', function($scope, DataService, $stateParams){
  var id = $stateParams.id;

  DataService.getReport(id).then(function (res) {
    $scope.report = res;
  });

});