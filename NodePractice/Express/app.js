const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();
app.use(express.json());

// Connect to MongoDB
console.log(process.env.MONGODB_URI);
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

// Import the Student model from db.js
const Student = require('./db');

app.get('/', function (req, res) {
  res.send('Working on Express');
});

app.get('/code', function (req, res) {
  res.send('Welcome to Express');
});

app.get('/code/:id', async function (req, res) {
  const id = req.params.id;
  try {
    const student = await Student.findById(id);
    if (!student) {
      res.status(404).send('Student not found');
      return;
    }
    res.send(`Welcome, ${student.name}`);
  } catch (error) {
    res.status(500).send('Error fetching student');
  }
});
app.post('/code', async function (req,res){
    try{
        const newStudent = new Student({
            sub: req.body.sub,
            items: req.body.items,
            name: req.body.items,
            description: req.body.description
        });
        await newStudent.save();
        console.log('student added successfully');
        res.send('Student added successfully');
    }catch (error) {
        console.error('Error adding student:', error);
        res.status(500).send('Error adding student');
      }
});
app.listen(8081, function () {
  console.log('Server is listening on port 8081');
});
