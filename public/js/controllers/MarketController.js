'use strict';

app.controller('MarketController', ['ngDialog', 'ngTableParams', function($scope, carePriceService, $location, toaster) {
    
  $scope.title = "Care Price App";
  $scope.tab = 'market';
  
  $scope.selectTab = function(setTab){
    $scope.tab = setTab;
  };
  
  $scope.isSelected = function(checkTab){
    return $scope.tab === checkTab;
  };

  $scope.addMarket = function() {
    var marketData = {
      id : '',
      name : $scope.name,
      products : {
        nameProduct: $scope.nameProduct,
        priceProduct: $scope.priceProduct
      }
    };
    carePriceService.create(marketData)
      .success(function (current, status, headers, config) {
          $location.path("/markets");
          toaster.pop('success', "Market added successfully!");
      })
      .error(function(current, status, headers, config) {
          toaster.pop('error', current);
      });
  };

  carePriceService.getById($routeParams.marketId)
    .success(function (current, status, headers, config) {
        $scope.current = current;
    })
    .error(function(current, status, headers, config) {
        toaster.pop('error', current);
     });

    // removePost function
  $scope.removePost = function () {
    carePriceService.remove($scope.current.id)
      .success(function (current, status, headers, config) {
          $location.path("/markets/");    
          toaster.pop('success', "Market removed successfully!");
      })
      .error(function(current, status, headers, config) {
          toaster.pop('error', current);
      });
  }
}]);