// server.js
var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
app = express();

app.get('/vereine', function (req, res) {
  res.send({ data: ['Musikverein', 'Kirchenchor', 'DRK', 'Malteser', 'Sportverein', 'Angelverein'] });
});

app.use(serveStatic(__dirname + "/dist"));





var port = process.env.PORT || 5000;
app.listen(port);
console.log('server started ' + port);