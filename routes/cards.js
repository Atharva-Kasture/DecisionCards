// routes/cards.js - This file defines the routes for handling decision cards in the application


const express = require('express');                      //Importing express framework
const router = express.Router();                         //Creating a new router instance
const { getAllCards } = require('../controllers/cardsController');    // Importing the controller function for handling card requests

// Define a route to handle GET requests for all decision cards
router.get('/', getAllCards);

// Export the router so it can be used in other parts of the application such as the main app file
module.exports = router;
