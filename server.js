var express = require('express');
var app = express();
var path    = require("path");

app.use('/static', express.static('res'))
app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
});