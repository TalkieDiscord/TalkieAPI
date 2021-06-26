var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require("fs");
var http = require("http");

var topics = fs.readFileSync("./topics.txt") + "";
var tarray = topics.split("\n");

var truths = fs.readFileSync("./truths.txt") + "";
var trarray = truths.split("\n");

var wyr = fs.readFileSync("./wyr.txt") + "";
var wrarray = wyr.split("\n");

var dares = fs.readFileSync("./dares.txt") + "";
var darray = dares.split("\n");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 3017;
var router = express.Router(); 

router.get('/', function(req, res) {
    res.json({ 
      'message':'Please add an appropriate endpoint to this API. Contact DylanP#9550 for more information on the endpoints avaliable.'
    });   
});
router.get('/topic', function(req, res) {
    res.json({ 
      'topic': tarray[Math.floor(Math.random() * tarray.length)]
    });
});

router.get('/truths', function(req,res) {
  res.json({ 
    'truth': trarray[Math.floor(Math.random() * trarray.length)]
  });
});

router.get('/wyr', function(req,res) {
  res.json({ 
    'wyr': wrarray[Math.floor(Math.random() * wrarray.length)]
  });
});

router.get('/dares', function(req, res) {
  res.json({ 
    'dare': darray[Math.floor(Math.random() * darray.length)]
  });
});

app.use('/', router);

app.listen(port);
console.log('App now running on Port ' + port);