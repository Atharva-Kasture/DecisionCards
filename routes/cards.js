const express = require('express');                      //Importing express framework
const router = express.Router();                         //Creating a new router instance

// Define a route for the cards endpoint
// This route will respond to GET requests at the base URL of this router
// It will send a JSON response with a message
router.get('/', (req, res) => {
  res.json({ message: 'Cards route working!' });
});

// Export the router so it can be used in other parts of the application such as the main app file
module.exports = router;
