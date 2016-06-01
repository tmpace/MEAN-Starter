// Import express
var express = require('express');

// Create express instance & declare port
var app = express();
var port = process.env.PORT || 1337;

// Start server
app.listen(port, function() {
  console.log('App running on port ' + port);
});
