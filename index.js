// index.js - Entry point for the DecisionCards backend application
// This file sets up the Express server and routes for the application.


require('dotenv').config();                     // Load environment variables from .env file

const express = require('express');              // Import the Express framework  
const app = express();                           // Create an instance of an Express application
const PORT = 3000;                              // Define the port on which the server will listen
const connectDB = require('./config/db');       // Import the database connection function

connectDB();                                    // Connect to the MongoDB database using the connection function              

// Enable JSON parsing for incoming requests
app.use(express.json());

// Define a root route for testing the base URL
app.get('/', (req, res) => {
  res.send('Hello from DecisionCards backend!');
});

// Start the server and listen on specified port
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server listening on port ${PORT}`);
});

// Import and use the cards route
// This route will handle all requests related to decision cards
const cardsRoute = require('./routes/cards');
app.use('/cards', cardsRoute);