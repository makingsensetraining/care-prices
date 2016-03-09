var app = angular.module('CarePriceApp',['ngDialog']);
  
app.controller('MarketController', ['$http', 'ngDialog', function($http, ngDialog){
    
  var market = this;
  market.title = "Care Price App";
  
  market.prducts = {};
  market.tab = 'market';
  
  market.selectTab = function(setTab){
    market.tab = setTab;
  };
  
  market.isSelected = function(checkTab){
    return market.tab === checkTab;
  };

  market.marketName = ["Coto", "Carefour"];
  
  market.addMarket = function () {
      market.errortext = "";
      if (!market.addMe) {return;}
      if (market.marketName.indexOf(market.addMe) == -1) {
          market.marketName.push(market.addMe);
      } else {
          market.marketName.errortext = "The market is already in the list.";
      }
  };

  market.removeMarket = function (X) {
      market.errortext = "";    
      market.marketName.splice(X, 1);
  };

  market.clickToOpen = function() {
    ngDialog.open({ template: 'templateId' });
  };

  market.products = {};

  market.products.addProduct = function(){
    market.errortext = "";
    if (!market.addName) {return;}
    if (market.products.indexOf(market.addName) == -1) {
        market.products.push(market.addName);
        market.products.push(market.addPrice);
    } else {
        market.product.errortext = "The market is already in the list.";
    }
  };

  market.products.removeMarket = function (X) {
      market.errortext = "";    
      market.product.splice(X, 1);
  };
  
}]);