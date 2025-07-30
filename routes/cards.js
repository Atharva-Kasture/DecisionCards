//cards.js - This file defines the routes for handling decision cards in the application


const express = require('express');                      //Importing express framework
const router = express.Router();                         //Creating a new router instance
const { getAllCards } = require('../controllers/cardsController');    // Importing the controller function for handling card requests
const { createCard } = require('../controllers/cardsController'); // Importing the controller function for creating a new card
const { deleteCard } = require('../controllers/cardsController'); // Importing the controller function for deleting a card
const { updateCard } = require('../controllers/cardsController'); // Importing the controller function for updating a card

// Define a route to handle GET requests for all decision cards
router.get('/', getAllCards);

// Route to handle POST requests for creating a new decision card
router.post('/', createCard); 

// Route to delete a card by ID
router.delete('/:id', deleteCard);

// Route to update a card by ID
router.put('/:id', updateCard);


// Export the router so it can be used in other parts of the application such as the main app file
module.exports = router;
