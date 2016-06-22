'use strict';

var express = require('express');
var app = express();

app.use('/static', express.static('src/public'));

app.set('view engine', 'jade');
app.set('views',__dirname + '/src/templates');

app.get('/', function(req, res){
  res.render('index');
});

app.listen(3000, function(){
  console.log('The frontend server is running on port 3000');
});