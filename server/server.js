var express = require('express');
var app = express();
var router = express.Router();
var bodyParser = require('body-parser');
var cors = require('cors');
var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/bdessinateur';
var jsonParser = bodyParser.json();

app.use(cors());

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/avis', function(req, res) {
	MongoClient.connect(url, function(err, db) {
		db.collection('avis').find().toArray(function(err, result) {
			res.json(result);
			if (err) {
				console.log(err);
			}
		});
		db.close();
	});
});

app.listen(3000, function() {
	console.log("Listening 3000");
});