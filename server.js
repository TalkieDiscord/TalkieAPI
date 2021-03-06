var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require("fs");
var http = require("http");

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
  const topics = fs.readFileSync("./topics.txt") + "";
  const tarray = topics.split("\n");
    res.json({ 
      'topic': tarray[Math.floor(Math.random() * tarray.length)]
    });
});

router.get('/truths', function(req,res) {
  const truths = fs.readFileSync("./truths.txt") + "";
  const trarray = truths.split("\n");
  res.json({ 
    'truth': trarray[Math.floor(Math.random() * trarray.length)]
  });
});

router.post('/add_topic', function (req, res) {
  const stuff = req.body.topic;
  fs.appendFile('./topics.txt' , `\n${stuff}`, (err) => {
    if (err) {
      res.sendStatus(500)
      console.log(`Error reported: ${err}`)
    }else {
    console.log(`Topic added: ${stuff}`)
    res.sendStatus(200)
    }
   })
})

router.post('/add_dare', function (req, res) {
  const stuff = req.body.topic;
  fs.appendFile('./dares.txt' , `\n${stuff}`, (err) => {
    if (err) {
      res.sendStatus(500)
      console.log(`Error reported: ${err}`)
    }else {
    console.log(`Dare added: ${stuff}`)
    res.sendStatus(200)
    }
   })
})

router.post('/add_truth', function (req, res) {
  const stuff = req.body.topic;
  fs.appendFile('./truths.txt' , `\n${stuff}`, (err) => {
    if (err) {
      res.sendStatus(500)
      console.log(`Error reported: ${err}`)
    }else {
    console.log(`Truth added: ${stuff}`)
    res.sendStatus(200)
    }
   })
})

router.post('/add_wyr', function (req, res) {
  const stuff = req.body.topic;
  fs.appendFile('./wyr.txt' , `\n${stuff}`, (err) => {
    if (err) {
      res.sendStatus(500)
      console.log(`Error reported: ${err}`)
    }else {
    console.log(`WYR added: ${stuff}`)
    res.sendStatus(200)
    }
   })
})

router.get('/wyr', function(req,res) {
  const wyr = fs.readFileSync("./wyr.txt") + "";
  const wrarray = wyr.split("\n");
  res.json({ 
    'wyr': wrarray[Math.floor(Math.random() * wrarray.length)]
  });
});

router.get('/dares', function(req, res) {
  const dares = fs.readFileSync("./dares.txt") + "";
  const darray = dares.split("\n");
  res.json({ 
    'dare': darray[Math.floor(Math.random() * darray.length)]
  });
});

app.use('/', router);

app.listen(port);
console.log('App now running on Port ' + port);