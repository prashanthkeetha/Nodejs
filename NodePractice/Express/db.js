const mongoose = require('mongoose');

// Define the student schema
const studentSchema = new mongoose.Schema({
  sub: String,
  items: String,
  name: String,
  description: String,
});

// Create the Student model
const Student = mongoose.model('Student', studentSchema);

module.exports = Student; // Export the Student model directly
