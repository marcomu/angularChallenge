'use strict';
angular.module('foodApp').service('DataService', function($http, $q){
  
  this.getList = function () {
    return $http({
      method: 'GET',
      url: 'http://api.nal.usda.gov/ndb/list?format=json&max=10&lt=f&sort=n&api_key=fA3P1h14dnXbSHqchOaN5Dho2wWizWASzzDmVXLV'
    }).then(function (resp) {
      return resp.data.list.item;
    });
  };

  this.getReport = function (id) {
    return $http({
      method: 'GET',
      url: 'http://api.nal.usda.gov/ndb/reports/?ndbno='+id+'&type=f&format=json&api_key=fA3P1h14dnXbSHqchOaN5Dho2wWizWASzzDmVXLV'
    }).then(function (resp) {
      return resp.data.report;
    });
  };

});