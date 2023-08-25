const express = require('express');
const app = express();

app.put('/', (req, res) => {
  res.send(['PUT', 'request', 'to', 'homepage']);
});

app.listen(8090, () => {
  console.log('Server is running on port 8090');
});
