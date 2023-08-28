const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/postmethod', (req, res) => {
    const requestData = req.body;
    console.log(req.body);

    if (requestData && requestData.items) {
        const items = requestData.items;
        
        // Using a for loop to iterate through the items array
        for (let i = 0; i < items.length; i++) {
            console.log('Processing item:', items[i]);
        }

        let counter = 0;
        while (counter < 5) {
            console.log('Counter:', counter);
            counter++;
        }

        let doCounter = 0;
        do {
            console.log('Do Counter:', doCounter);
            doCounter++;
        } while (doCounter < 3);
        
        res.send('Data received and processed');
    } else {
        res.status(400).send('Bad Request: Missing or invalid "items" data');
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
