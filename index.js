var express = require('express');
var app = express();
var path    = require("path");

app.use('/static', express.static('res'))
app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
});

app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});