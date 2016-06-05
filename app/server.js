// Import express
var express = require('express');

// Create express instance & declare port
var app = express();
var port = process.env.PORT || 1337;

// Connect to DB
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/starter'); // Replace 'starter' with your DB name

// Middleware
app.use(express.static(__dirname + '/../public'));

// Start server
app.listen(port, function() {
  console.log('App running on port ' + port);
});

module.exports = app;
