const express = require('express');
const app = express();

app.use(express.json());

app.patch('/',(req,res) =>{
    const Resources={
        Name: 'ibridgedigital',
        Work: 'Progress',
        Time: '2:00'
    };
    res.json(Resources);

});
app.listen(8091,() =>{
    console.log('connecting to the server on 8091')
})