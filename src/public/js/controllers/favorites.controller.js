'use strict';

angular.module('foodApp').controller('FavoritesController', function($scope, DataService){
  var favs = localStorage.getItem("favs");
  $scope.favs = JSON.parse(favs);
  
  $scope.deleteFavorite = function(item){
    console.log(item);
    delete $scope.favs[item.offset];
    localStorage.setItem("favs", JSON.stringify($scope.favs));

  }

});