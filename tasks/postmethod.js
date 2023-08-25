const express = require('express');
const app = express();

app.use(express.json());

app.post('/', (req, res) => {
    const requestData = req.body;
    
    res.json({ message: 'POST request to the homepage: got the post', data: requestData });
});

app.listen(8088, () => {
    console.log('Server is running on port 8088');
});
