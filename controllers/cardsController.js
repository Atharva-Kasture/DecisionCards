// cardsController.js - This file contains the logic for handling decision cards in the application

const Card = require('../models/cardsModel'); // Importing the Card model to interact with the database

// Function to get all decision cards from the database
const getAllCards = async (req, res) => {
    try {
        const cards = await Card.find(); // Fetch all cards from the database
        res.status(200).json(cards); // Send the fetched cards as a JSON response with status 200
    } catch (error) {
        res.status(500).json({ message: 'Error fetching cards', error: error.message }); // Handle errors and send a 500 status with error message
    }
};

//Create a new card
const createCard = async (req, res) => {
    const { title, description } = req.body; // Destructure title and description from the request body

    try {
        const newCard = new Card({ title, description }); // Create a new card instance with the provided data
        await newCard.save(); // Save the new card to the database
        console.log('New card saved:', newCard); // Log the creation of the new card
        res.status(201).json(newCard); // Send the created card as a JSON response with status 201
        
    } catch (error) {
        res.status(400).json({ message: 'Error creating card', error: error.message }); // Handle errors and send a 500 status with error message
    }
}

// Delete a card
const deleteCard = async (req, res) => {
    try {
        const deleted = await Card.findByIdAndDelete(req.params.id);            // Find and delete the card by ID
        if (!deleted) return res.status(404).json({ message: 'Card not found' });      // If no card is found, return a 404 status with a message
        res.status(200).json({ message: 'Card deleted successfully' }); // Return a success message with status 200
    } catch (error) {
        res.status(500).json({ message: 'Error deleting card', error: error.message }); // Handle errors and send a 500 status with error message
    }
};

// Update a card
const updateCard = async (req, res) => {
    try {
        const updated = await Card.findByIdAndUpdate(req.params.id, req.body, { new: true }); // Find the card by ID and update it with the request body, returning the updated card
        if (!updated) return res.status(404).json({ message: 'Card not found' }); // If no card is found, return a 404 status with a message
        res.status(200).json(updated); // Return the updated card as a JSON response with status 200
    } catch (error) {
        res.status(500).json({ message: 'Error updating card', error: error.message }); // Handle errors and send a 500 status with error message
    }
};


// Exporting the functions to be used in the routes
module.exports = {getAllCards, createCard, deleteCard, updateCard};