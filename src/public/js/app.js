 var app = angular.module('foodApp', ['ui.router']);

 app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

  $urlRouterProvider.otherwise("/");
  //
  // Now set up the states
  $stateProvider
    .state('root', {
      url: "/",
      templateUrl: "./static/partials/home.html"
    })
    .state('search', {
      url: "/search",
      templateUrl: "./static/partials/search.html",
      controller: 'SearchController'
    })
    .state('item', {
      url: "/item?:id",
      templateUrl: "./static/partials/item.html",
      controller: 'ItemController'
    })


});
