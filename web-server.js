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

db.once('open', function() { });

// _____________________________________________________________________________________________________ 

mongoose.connect('mongodb://localhost/test');