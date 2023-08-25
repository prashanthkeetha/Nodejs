const express = require('express');
const app = express();

app.use(express.json());

app.get('/:id', (req, res) => {
    res.send('I am accessing the Get using ' + req.params.id);
});

app.get('/', (req, res) => {
    console.log(('I am accessing the Get using '));
    res.send('I am accessing the Get using ');
});

app.post('/', (req, res) => {
    console.log("POST request to the homepage");
    const requestData = req.body;
    
    res.json({ message: 'POST request to the homepage: got the post', data: requestData });
});

app.put('/', (req, res) => {
    console.log('working');
    res.send(['PUT', 'request', 'to', 'homepage']);
});

app.patch('/', (req, res) => {
    console.log('patch is working');
    const resources = {
        Name: 'ibridgedigital',
        Work: 'Progress',
        Time: '2:00'
    };
    res.json(resources);
});

app.listen(8088, () => {
    console.log('Server is running on port 8088');
});

