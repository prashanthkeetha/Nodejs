const express = require('express');
const app = express(); 

app.get('/', function(req, res) {
    const countryList = ['jammu&kashmir', 'ladakh', 'Delhi', 'chandigarh', 'Daman&Diu', 'puducherry', 'lakshadweep', 'andaman&nicobar'];
    const requestedCountry = req.query.country;

    if (requestedCountry && countryList.includes(requestedCountry)) {
        res.send(`You requested information for ${requestedCountry}`);
    } else {
        res.send('Invalid or missing country parameter');
    }
});


app.listen(8084, () => {
    console.log('Server is running on port 8084');
});
