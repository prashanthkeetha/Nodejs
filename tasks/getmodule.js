const express = require('express');
const app = express(); 

app.get('/:id', function(req, res) {
    res.send('I am accessing the Get using ' + req.params.id);
});

app.listen(8084, function() { // Start the server
    console.log('Server is running on port 8084');
});
