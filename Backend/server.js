const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');



const app = express(); // Initialize the Express app

app.use(cors()); // Enable CORS for cross-origin requests
app.use(express.json()); // Parse JSON bodies

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/your_database_name', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.error("MongoDB connection error:", err));

// Define application schema and model
const ApplicationSchema = new mongoose.Schema({
  name: String,
  email: String,
  statement: String
});

const Application = mongoose.model('Application', ApplicationSchema);

// API route for form submissions
app.post('/api/applications', async (req, res) => {
  try {
    const newApplication = new Application(req.body);
    await newApplication.save();
    res.status(200).send('Application submitted successfully!');
  } catch (error) {
    console.error('Error saving application:', error);
    res.status(500).send('Error submitting application');
  }
});

// Admin route to view submissions


// Start the server
app.listen(5000, () => console.log('Server running on port 5000'));
