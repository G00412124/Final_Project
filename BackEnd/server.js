const express = require('express');
const app = express();
const port = 4000; // Port 4000 

// CORS Middleware
const cors = require('cors'); //  Resource Sharing
app.use(cors());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // Update to match the domain 
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); 
  next();
});

// Body parser middleware 
const bodyParser = require('body-parser'); // Parse incoming request bodies in a middleware
app.use(bodyParser.urlencoded({ extended: true })); // Parse application
app.use(bodyParser.json());

// MongoDB Connection
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:admin@matthewservices.7cywq.mongodb.net/yourDatabaseName') // Connect to MongoDB
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err)); // Log any errors

// Motorbike Part Schema & Model
const motorbikePartSchema = new mongoose.Schema({ // Define a motorbike part schema
  name: String, // The part name 
  description: String, // Description of the part
  price: Number, // Price of the part
  image: String // Image URL of the part 
});

const motorbikePartModel = mongoose.model('motorbikeParts', motorbikePartSchema); // Create a motorbike part model

// GET All Motorbike Parts
app.get('/api/motorbikeParts', async (req, res) => { // Define a route to get all motorbike parts
  try {
    const parts = await motorbikePartModel.find({}); // Fetch all motorbike parts from the database
    res.status(200).json({ parts }); // Respond with the parts in JSON
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch motorbike parts' }); 
  }
});

// POST a new Motorbike Part
app.post('/api/motorbikeParts', (req, res) => { // Define a route to add a new motorbike part
  console.log(req.body); // Log request body for debugging
  const { name, description, price, image } = req.body;

  const newPart = new motorbikePartModel({ name, description, price, image }); // Create a new motorbike part document
  newPart.save()
    .then(() => res.status(201).send('Motorbike part added!')) // Respond with a message if successful
    .catch((error) => {
      console.error('Error adding motorbike part:', error); // Log any errors
      res.status(500).send('Failed to add motorbike part'); // Respond with an error message
    });
});

// GET Motorbike Part by ID
app.get('/api/motorbikePart/:id', async (req, res) => { // Define a route to get a motorbike part by ID
  try {
    const part = await motorbikePartModel.findById(req.params.id); // Fetch a part by ID
    if (!part) {
      return res.status(404).json({ error: 'Motorbike part not found' }); // Respond with an error if part not found
    }
    res.status(200).json(part); // Respond with the part in JSON
  } catch (error) { // Handle server errors
    res.status(500).json({ error: 'Failed to fetch motorbike part' }); // Respond with an error message
  }
});

// PUT (Update) Motorbike Part by ID
app.put('/api/motorbikeParts/:id', async (req, res) => { // Define a route to update a motorbike part by ID
  try {
    const { name, description, price, image } = req.body; 

    const updatedPart = await motorbikePartModel.findByIdAndUpdate( // Find a part by ID and update it
      req.params.id,
      { name, description, price, image }, // Update the part details
      { new: true }
    );

    if (!updatedPart) { // Handle case where part is not found
      return res.status(404).json({ error: 'Motorbike part not found' }); // Respond with an error if part not found
    }

    res.status(200).json(updatedPart); // Respond with the updated part
  } catch (error) { // Handle server errors
    console.error('Error updating motorbike part:', error); // Log any errors
    res.status(500).json({ error: 'Failed to update motorbike part' });
  }
});

// DELETE Motorbike Part by ID
app.delete('/api/motorbikeParts/:id', async (req, res) => { // Define a route to delete a motorbike part by ID
  try {
    const deletedPart = await motorbikePartModel.findByIdAndDelete(req.params.id); // Find a part by ID and delete it
    if (!deletedPart) {
      return res.status(404).json({ error: 'Motorbike part not found' }); // Respond with an error if part not found
    }
    res.status(200).json({ message: 'Motorbike part deleted successfully' }); // Respond with a message if successful
  } catch (error) { // Handle server errors
    console.error('Error deleting motorbike part:', error); // Log any errors
    res.status(500).json({ error: 'Failed to delete motorbike part' }); // Respond with an error message
  }
});

// Start server
app.listen(port, () => { // Listen on port 4000
  console.log(`Server is running on http://localhost:${port}`); // Log a message to the console
});
