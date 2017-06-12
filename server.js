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

app.getapp.get('/', function (req, res, next) {
	res.render('home');
});

app.getapp.get('/News', function (req, res, next) {
	templateArgs{
		articles: newsData
	};
	res.render('news', templateArgs);
});


app.listen(port, function(){
	console.log("Server listening on port:", port);
});
