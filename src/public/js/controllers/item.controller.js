'use strict';

angular.module('foodApp').controller('ItemController', function($scope, DataService, $stateParams){
  var id = $stateParams.id;
  var reportLS = localStorage.getItem(id);
  if (typeof(Storage) !== "undefined") {
    if (reportLS !== null){
      reportLS = JSON.parse(reportLS);
      $scope.report = reportLS;
      console.log('Retrieved from local storage')
    }else{
      DataService.getReport(id).then(function (res) {
        $scope.report = res;
        localStorage.setItem(id, JSON.stringify(res));
        console.log('Local storage created')
      });
    }
  }else{
    console.log('your browser does not support HTML5 local storage')
  }


});