'use strict';

angular.module('foodApp').controller('FavoritesController', function($scope, DataService){
  var favs = localStorage.getItem("favs");
  
  $scope.getFavorites = function(){
     console.log(favs)

  }

});