app.service('carePriceService', function ($http, $location) {
	 //return the array
        this.getAll = function () {
           return $http.get('/api/markets');
        }
       
        //search by id in the current array
        this.getById = function (itemId) {  
            return $http.get('/api/markets/'+ itemId);
        };
    
        //add a new element to array
        this.create = function (marketData) {
            return $http.post('/newMaket', marketData);
        };
    
        //remove blogItem matching by id
        this.remove = function (item) {
            return $http.delete('/delete/'+item);
            
        };
});