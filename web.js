var express = require('express');
var fs=require('fs');

var input_file='index.html';
var app = express.createServer(express.logger());

var data_buffer= fs.readFileSync(input_file);
app.get('/', function(request, response) {
  
  var data_buffer= fs.readFileSync(input_file);
  response.send(data_buffer.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
