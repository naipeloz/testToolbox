'use strict';

var express = require('express');
var app = express();
const bodyParser = require('body-parser');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Credentials', true);
  next();
});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())


app.get('/api/repeat', function (req, res) {
  res.send("Hi everyboby on Toolbox, I am working.");
});

app.post('/api/repeat', function (req, res) {
  const postBody = req.body;
  if(postBody.message){
    res.send(postBody.message)
  }else{
    res.send("NO DATA")
  }
});

module.exports = app;