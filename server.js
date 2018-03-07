var express = require('express');
var bodyParser = require('body-parser');

// create express app
var app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())


var dbConfig = require('./config/database.config.js');
var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url, {
   // useMongoClient: true
});

mongoose.connection.on('error', function() {
    console.log('Could not connect to the database. Exiting now...');
    process.exit();
});

mongoose.connection.once('open', function() {
    console.log("Successfully connected to the database");
})



// define a simple route
app.get('/', function(req, res){
    res.json({"message": "you are welcome."});
});


require('./app/routes/beauty.routes.js')(app);
require('./app/routes/event.routes.js')(app);
require('./app/routes/business.routes.js')(app);
require('./app/routes/homeService.routes.js')(app);
require('./app/routes/health.routes.js')(app);
require('./app/routes/repair.routes.js')(app);

// listen for requests
app.listen(3007, function(){
    console.log("Server is listening on port 3007");
});
