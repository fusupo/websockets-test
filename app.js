// var express = require('express');
// var config = require('./config/config');
// var app = express();

// require('./config/express')(app, config);

// var port = process.env.PORT || 3000;
// app.listen();
 
// app.get('/', function(req, res) {
//   res.send('Hello World!');
// });

// var server = app.listen(port, function() {
//   var host = server.address().address;
//   var port = server.address().port;

//   console.log('Example app listening at http://%s:%s', host, port);
// });

var cool = require('cool-ascii-faces');
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

  //app.use(express.static(__dirname + '/public'));

// views is directory for all template files
// app.set('views', __dirname + '/views');
// app.set('view engine', 'ejs');

// app.get('/', function(request, response) {
//   response.render('pages/index');
// });

app.get('/', function(req, res) {
  res.send('Hello World! Muther Sucker!');
});

app.get('/cool', function(request, response) {
  response.send(cool());
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


