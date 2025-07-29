//cardsModel.js - This file defines the model for decision cards in the application

const mongoose = require('mongoose'); // Importing mongoose for MongoDB interaction

const cardSchema = new mongoose.Schema({ // Defining the schema for decision cards
    title: {
        type: String,
        required: true, // Title is required for each card
    },
    description: {
        type: String,
    }
}, {
    timestamps: true // Automatically manage createdAt and updatedAt fields
});

const Card = mongoose.model('Card', cardSchema); // Creating a model from the schema
module.exports = Card; // Exporting the Card model for use in other parts of the application

