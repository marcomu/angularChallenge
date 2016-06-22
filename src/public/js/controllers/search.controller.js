'use strict';

angular.module('foodApp').controller('SearchController', function($scope, DataService){
  var foodListLS = localStorage.getItem("foodList");
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
  }else{
    console.log('your browser does not support HTML5 local storage')
  }
  

});