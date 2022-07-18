////https://www.tutorialspoint.com/expressjs/expressjs_restful_apis.htm
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = express();
var port = 3030;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

//Require the Router we defined in movies.js
var msg = require('./dummy-msg.json');

//Use the Router on the sub route /movies
app.get('/messages', function(req,res){return res.json([msg]);});

app.listen(port);
console.log(`running on port ${port}`);