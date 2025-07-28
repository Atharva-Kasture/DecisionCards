// cardsController.js - This file contains the logic for handling decision cards in the application

// GET /cards controller logic'
// This function will handle requests to get all decision cards
const getAllCards = (req, res) => {
  res.json({ message: 'Cards controller working!' });
};

// Export the controller functions so they can be used in the routes
module.exports = { getAllCards };
