var express = require('express');
var app = express();

app.get('/', function (req, res) {


  var sendgrid_api_key = "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"
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
