/*app.controller('MarketController', ['ngDialog', 'ngTableParams',  function(ngDialog, ngTableParams){
    
  var market = this;
  market.title = "Care Price App";
  market.tab = 'market';
  
  market.selectTab = function(setTab){
    market.tab = setTab;
  };
  
  market.isSelected = function(checkTab){
    return market.tab === checkTab;
  };

  market.marketName = ["Coto","Carefour"];
  
  market.addMarket = function () {
      market.errortext = "";
      if (!market.addMe) {return;}
      if (market.marketName.indexOf(market.addMe) == -1) {
          market.marketName.push(market.addMe);
          market.addMe = '';
      } else {
          market.marketName.errortext = "The market is already in the list.";
      }
  };

  market.removeMarket = function (X) {
      market.errortext = "";    
      market.marketName.splice(X, 1);
  };

  market.clickToOpen = function() {
    ngDialog.open({ template: 'partial/addProduct.html' });
  };

  market.products = [];

  market.addProduct = function(){
    market.products.push({
      name: market.nameProduct,
      price: market.priceProduct
    });
    market.nameProduct = '';
    market.priceProduct = '';
  };

  market.removeProduct = function (X) {
      market.errortext = "";    
      market.products.splice(X, 1);
  };

}]);*/