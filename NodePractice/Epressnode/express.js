/*// Import the Express.js library and create an instance of the Express application.
const express = require('express');
const app = express();
console.log(app);

// A router instance is a middleware and routing system.
const router = express.Router();
console.log(router)
// Define a route for handling GET requests to the root URL ("/").
app.get('/team', function (req, res) {
  // Send the response "Hello World" when a GET request is made to the root URL.
  res.send('Hello World');
});

// Start the Express server and have it listen on port 3000.
app.listen(3001);
console.log('WORKING ON 3001 PORT');*/



// ---
/*const express = require('express');
const app = express();
console.log(app);
//The main objective of this method is to parse the incoming request with urlencoded payloads and is based upon the body-parser.
app.use(express.json())
app.use(express.urlencoded());

const router = express.Router();
console.log(router);

app.post('/data', function (req,res){
  res.send(req.body);
});
app.listen(3001);
console.log('WORKING ON 3001 PORT');*/



/*//--
 const express = require('express');
 const app = express();

 app.use(express.json());
//  app.use(express.urlencoded());


const route = express.Router();
//  console.log(route);

 app.put('/things',function(req,res){
  console.log(req.body);
  res.send(req.body.items);
 });
 app.listen(3002);
 console.log('running')*/



//---

/*const express = require('express');
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// DELETE route for '/ping'
app.delete('/ping', function (req, res) {
  // Log the request body
  console.log(req.body);

  // Send a response (e.g., a success message)
  res.send('Deleted successfully');
});

// Start the server
app.listen(3002)
  console.log(`Server is running`);*/



// ---
// PATCH is a method of modifying resources where the client sends partial data that is to be updated without modifying the entire data.

/*const express = require('express');
const app = express();

// Middleware to parse JSON in request bodies
app.use(express.json());

app.patch('/data',
function (req, res) {
  console.log(req.body);
  res.json(req.body); // Sending back the same JSON data
  
});

app.listen(3003) 
  console.log('Server is running on port 3003');*/






//----

/*const express = require('express');
const app = express();

// Middleware to parse JSON in request bodies
app.use(express.json());

app.patch('/data', function (req, res) {
  // You can access the JSON data from the request body here
  const json = {
    work: 'express',
    place: 'nodejs'
  };
  
  // Logging the received JSON data
  console.log(json);

  // Sending back the same JSON data
  res.json(json);
});

app.listen(3003)
  console.log('Server is running on port 3003');*/




//---

/*const express = require('express');
const app = express();

app.use(express.json());

app.head('/data', function (req, res) {
  res.status(200);
  res.send(req.body) // Set status code to 200 and end the response
});

app.listen(3003) 
  console.log('Server is running on port 3003');*/


  /*const express = require('express');
  const app = express();
  
  app.get('/html', function (req, res){
  res.send('<h1>This is an HTML response</h1>');
  });
  
  app.get('/xml', function (req, res)  {
    res.set('Content-Type', 'application/xml');
    const xmlData = '<root><message>This is an XML response</message></root>';
    res.send(xmlData);
  });
  
  app.get('/text', function (req, res) {
    res.send('I am working on express');
  });
  
  app.listen(8082)
    console.log('Server is listening on port 8082');*/


const express = require('express');
const app = express();
    
app.post('/html', function (req, res){
res.send('<h1>This is an HTML response</h1>');
  });
    
app.post('/xml', function (req, res)  {
res.set('Content-Type', 'application/xml');
const xmlData = '<root><message>This is an XML response</message></root>';
res.send(xmlData);
});
    
    app.post('/text', function (req, res) {
      res.send('I am working on express');
    });
    
    app.listen(8082)
      console.log('Server is listening on port 8082');
  
  




/*//---
const express = require('express');
const app = express();

app.post('/data', function (req, res) {
  res.send(Buffer.from('junction lo ne function')); //creates a new buffer filled with the specified string, array, or buffer.
});

app.listen(3001, () => {
  console.log('WORKING ON 3001 PORT');
});*/
//---

/*const express = require('express');
const app = express();

app.put('/info',(req,res)=>{
  res.status(404).send('Sorry, cant find that');
})
app.listen(3001, () =>{
  console.log('lisenting to status')
})*/
//
/*const express = require('express');
const app = express();

app.put('/info', (req, res) => {
  console.log('http://localhost:3001/info'); // This is the added console.log
  res.status(404).send('Sorry, can\'t find that');
});

app.listen(3001, () => {
  console.log('Listening to port 3001');
});*/
//----
// SETTIMEOUT INTERVAL FOR THE CODE
/*const express = require('express');
const app = express();

app.put('/info', (req, res) => {
  console.log('http://localhost:3001/info'); // This is the added console.log
  res.status(404).send('Sorry, can\'t find that');
});

// Delay the start of the server by 5 seconds (5000 milliseconds)
setTimeout(() => {
  app.listen(3001, () => {
    console.log('Listening to port 3001');
  });
}, 5000);*/

