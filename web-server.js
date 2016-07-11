var express = require("express"),
    app     = express();
var mongoose = require('mongoose');


/// configuration _______________________________________________________________________________________ 
app.configure(function(){
    app.set('port', process.env.PORT || 3000);
    app.use(express.errorHandler());
    app.use(express.methodOverride());
    app.use(express.bodyParser());
    app.use(express.static(__dirname + '/public'));
    app.use(express.errorHandler());
    app.use(app.router);
});

app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});

app.get("/", function(req, res) {
    res.redirect("public/index.html");
});

// _____________________________________________________________________________________________________ 

// mongo db ____________________________________________________________________________________________ 

var db = mongoose.connection;

db.on('error', console.error);

db.once('open', function() {            
    // Schema
    var marketSchema = new mongoose.Schema({
        id: Number,
        name: { type: String },
        products:  [{ 
            name: {type: String},
            price: {type: Number} 
        }]
    });
    // Mongoose also creates a MongoDB collection called 'Market' for these documents.
    var market = mongoose.model('singleMarket', marketSchema);
    
    // examples ____________________________________________________________________________________________ 
    
    var market_example1 = new market({
        id: 1,
        title: 'Coto',
        products:  [{
            name: 'Te',
            price: 15
        }, {
            name: 'Pan',
            price: 10
        }]
            
    });

    var market_example2 = new market({
        id: 2,
        title: 'Carefour',
        products:  [{
            name: 'Agua',
            price: 15
        }, {
            name: 'Fideos',
            price: 10
        }]
    });
    
    var contID = 2;
    
    market_example1.save();
    market_example2.save();
    
    // _____________________________________________________________________________________________________ 
    
    // get all markets
    app.get('/api/markets', function(req, res){
        markets.find(function(err, markets) {
            if (err) return console.error(err);
            res.send (markets);
        });
    });
        
    //get a particular post by ID
    app.get('/api/markets/:id', function(req, res){
        markets.findOne({ id: req.params.id }, function(err, uniqMarket) {
            if (err) return console.error(err);
            res.send (uniqMarket);
            });
    });
    
    // create a new post
    app.post('/newMaket', function(req, res) {
        var newMarket = new market({
            id: ++contID,
            name : req.body.title
        });
        newMarket.save();
        res.json(true);
    });

    // delete a particular post
    app.delete('/delete/:id', function(req, res) {
        market.remove({ id: req.params.id }, function (err) {
            if (err) return handleError(err);
            // removed!
            res.json(true);   
        });    
    });
});

// _____________________________________________________________________________________________________ 

mongoose.connect('mongodb://localhost/test');