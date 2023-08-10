// Require Express to work
const express = require('express');

// Create an instance of Express
const app = express();

// Define a route for GET requests
app.get('/', function(req, res) {
    res.send('working on the express');
});
// to search the content
app.get('/code',function(req,res){
    res.send('welcome to express')
});

// Start the server on port 8081
app.listen(8081, function() {
    console.log("Server is listening on port 8081");
});
