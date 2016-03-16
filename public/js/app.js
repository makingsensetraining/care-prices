'use strict';


// Declare app level module which depends on filters, and services
var app = angular.module('CarePriceApp', [ 'ngRoute', 'ngDialog', 'ngTable' ]);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider    
        .when('/', 
            {
            controller: 'MarketController',
            templateUrl: 'partial/viewMarket.html' 
            })
        .when('/admin', 
            {
            controller: 'MarketController',
            templateUrl: 'partial/addMarket.html' 
            }) 
        .otherwise({redirectTo: '/'});
}]);