var path = require('path');
var fs = require('fs');
var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');

var app = express();
var port = process.env.PORT || 3000;
app.engine('handlebars', exphbs({defaultLayout:'main'}));
app.set('view engine', 'handlebars');

var aboutData = require("./aboutData");
var newsData = require("./newsData");
var jobData = require("./jobData");
var newsTitle = "Galactic News";

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());



app.post('/Job-Openings', function (req, res, next) {
  
console.log("In job openings post!");	
//var job = jobData[req.params];
//console.log("job:", job);
        if (req.body.title && req.body && req.body.url) {

            var job = {
                title: req.body.title,
                url: req.body.url,
                description: req.body.description
            };


            jobData.push(job);
            fs.writeFile('jobData.json', JSON.stringify(jobData), function (err) {
                if (err) {
                    res.status(500).send("Unable to save job to \"database\".");
                } else {
                    res.status(200).send();
                }
            });

        } else {
            res.status(400).send("Job Listing must have all fields filled out.");
        }

    /*} else {
        next();
    }*/
});

app.post('*', function(req,res,next){
	
console.log("Request info:", req.method); 
console.log("Request url:", req.url); 
console.log("Request headers:", req.headers); 
});

app.get('/', function (req, res, next) {
    var templateArgs = {
        pageTitle: "The Galactic Empire"
    };
	res.render('home', templateArgs);
});

app.get('/News', function (req, res, next) {
    var templateArgs = {
        pageTitle: "Galactic News",
		articles: newsData
	};
	res.render('news', templateArgs);
});

app.get('/Job-Openings', function (req, res, next) {
    var templateArgs = {
        pageTitle: "Job Openings",
		jobs: jobData
	};
	res.render('job_openings', templateArgs);
});

app.get('/About', function (req, res, next) {
    var templateArgs = {
        pageTitle: "About Us",
		people: aboutData
	};
	res.render('about', templateArgs);
});

app.get('*', function (req, res) {

console.log("Request info:", req.method); 

  res.status(404).render('404Page');
});

app.listen(port, function(){
	console.log("Server listening on port:", port);
});
