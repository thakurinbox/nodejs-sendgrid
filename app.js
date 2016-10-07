var express = require('express');
var app = express();

app.get('/', function (req, res) {


  var sendgrid_api_key = "YOUR SENDGRID KEY"
  var sendgrid  = require('sendgrid')(sendgrid_api_key);

  var email     = new sendgrid.Email({
  to:       'thakurinbox@gmail.com',
  from:     'gencypher@gmail.com',
  subject:  'Subject goes here',
  text:     'Hello world'
});
sendgrid.send(email, function(err, json) {
  if (err) { return console.error(err); }
  console.log(json);
});

  res.send('Hello World!');



});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
  console.log('Open http://localhost:3000/ on your browser!')
});
