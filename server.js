var path = require('path');
var fs = require('fs');
var express = require('express');
var exphbs = require('express-handlebars');

var app = express();
var port = process.env.PORT || 3000;
app.engine('handlebars', exphbs({defaultLayout:'main'}));
app.set('view engine', 'handlebars');

var aboutData = require("./aboutData");
var newsData = require("./newsData");
var jobData = require("./jobData");

app.listen(port, function(){
	console.log("Server listening on port:", port);
});