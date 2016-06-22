'use strict';

angular.module('foodApp').controller('SearchController', function($scope, DataService){
  DataService.getList().then(function (res) {
    $scope.foodList = res;
  });

});