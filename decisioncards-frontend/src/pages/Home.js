//home.js - This file contains the main page of the DecisionCards application
import React, { useState, useEffect } from 'react'; // Importing React and hooks for state and effect management

const Home = () => {
  const [cards, setCards] = useState([]);               // State to hold the list of decision cards

  useEffect(() => {
    fetch('http://localhost:3000/cards')                // Fetching decision cards from the backend API
      .then(res => res.json())  
      .then(data => setCards(data))                     // Setting the fetched cards to the state
      .catch(err => console.error('Error:', err));      // Handling any errors during the fetch operation    
  }, []);

// Rendering the list of decision cards
  return (
    <div>
      <h1>Decision Cards</h1> 
      <ul>
        {cards.map(card => (
          <li key={card._id}>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;

