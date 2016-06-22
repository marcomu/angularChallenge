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

  //
  $locationProvider.html5Mode(true);

});
