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

app.getapp.get('/Job-Openings', function (req, res, next) {
	templateArgs{
		jobs: jobData
	};
	res.render('job_openings', templateArgs);
});

app.getapp.get('/About', function (req, res, next) {
	templateArgs{
		people: aboutData
	};
	res.render('about', templateArgs);
});

app.get('*', function (req, res) {
  res.status(404).render('404Page');
});

app.listen(port, function(){
	console.log("Server listening on port:", port);
});
