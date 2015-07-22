var express = require('express'),
  config = require('./config/config');

var app = express();

require('./config/express')(app, config);

// app.listen(config.port, function(){
//   console.log('funk');
// });

//var app = express();

app.get('/', function(req, res) {
  res.send('Hello World!');
});

var server = app.listen(3000, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
