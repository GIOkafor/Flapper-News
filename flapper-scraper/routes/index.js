var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//render results ejs template 
router.get('/results', function(req, res, next) {
  var db = req.db;
  var results = db.get('searchresults');
  results.find({},{}, function (e, docs){
  	res.render('results', { title: 'Results page' ,
  		"results" : docs
  	});
  });
  
});

//GET results page and render in jade template
router.get('/results', function (req, res) {
	var db = req.db;
	var results = db.get('searchresults');
	results.find({},{}, function (e, docs) {
		res.render('results', {
			"results" : docs
		});
	}) ;
});

//
router.get('/flapper', function (req, res) {
	res.render('flapper', {title: 'Flapper News'});
});

module.exports = router;