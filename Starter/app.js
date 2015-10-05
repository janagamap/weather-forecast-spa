// Module
var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);

weatherApp.config(function($routeProvider){
   $routeProvider
   .when('/', {
      templateUrl: 'pages/home.htm',
      controller: 'homeController'
    })
   .when('/forecast', {
      templateUrl: 'pages/forecast.htm',
      controller: 'forecastController'
    })

});

//controllers
weatherApp.controller('homeController', ['$scope', function($scope){
    
    $scope.name = "Prashanth";

}]);


weatherApp.controller('forecastController', ['$scope', function($scope){

}]);