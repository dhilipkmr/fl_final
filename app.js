var express = require('express');
var path = require('path');
var app = express();
app.use(express.static(path.join(__dirname, 'view')));
app.use(express.static(__dirname));
app.listen(7000, '0.0.0.0', function() {
  console.log('Server is running at http://localhost:7000/');
});

module.exports = app;