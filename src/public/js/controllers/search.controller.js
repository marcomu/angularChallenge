'use strict';

angular.module('foodApp').controller('SearchController', function($scope, DataService){
  var foodListLS = localStorage.getItem("foodList");
  var favs = localStorage.getItem('favs');
  $scope.favorites ={};
  if (typeof(Storage) !== "undefined") {
    if (foodListLS !== null){
      foodListLS = JSON.parse(foodListLS);
      $scope.foodList = foodListLS;
      console.log('Retrieved from local storage')
    }else{
      DataService.getList().then(function (res) {
        $scope.foodList = res;
        localStorage.setItem("foodList", JSON.stringify(res));
        console.log('Local storage created')
      });
    }
    console.log($scope.foodList);
  }else{
    console.log('your browser does not support HTML5 local storage')
  }

  $scope.addFavorite = function(item,favorite){
    console.log(favorite)
    if(favorite){
      $scope.favorites[item.offset] = item;
      console.log('add ' + item);
      console.log( $scope.favorites);
    }else{
      console.log('deleted ' + item.id);
      delete $scope.favorites[item.offset]
    }
    localStorage.setItem("favs", JSON.stringify($scope.favorites));
  }

  

});