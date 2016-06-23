'use strict';

angular.module('foodApp').controller('FavoritesController', function($scope, DataService){
  var favs = localStorage.getItem("favs");
  $scope.favs = JSON.parse(favs);
  $scope.showTable = _.isEmpty($scope.favs);

});