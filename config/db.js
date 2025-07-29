// database.js - This file configures the database connection for the application

const mongoose = require('mongoose'); // Importing mongoose for MongoDB interaction

// Function to connect to the MongoDB database
// It uses the connection string stored in the environment variable MONGO_URI
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection failed:', error.message);
        process.exit(1);
    }
};

module.exports = connectDB;