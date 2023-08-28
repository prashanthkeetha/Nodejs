const express = require('express');
const app = express();
const port = 8090;

app.use(express.json());

app.put('/putmethod', (req, res) => {
    const requestData = req.body;
    console.log(req.body);

    if (requestData && requestData.name) {
        const name = requestData.name;
        
        // Your logic to process the data goes here
        
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
        res.status(400).send('Bad Request: Missing or invalid "name" data');
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

/*OUTPUT:
{
  sub: 'DEV',
  items: 'NODEJS',
  name: 'PRASHANTH',
  description: 'This is an item description'
}
Counter: 0
Counter: 1
Counter: 2
Counter: 3
Counter: 4
Do Counter: 0
Do Counter: 1
Do Counter: 2*/