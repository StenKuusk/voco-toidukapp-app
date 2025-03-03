import React, { useState } from 'react';
import './App.css';
import Header from './components/Layout/Header/Header.js';
import Home from './pages/Homepage_kopli/Homepage_kopli';
import Footer from './components/Layout/Footer/Footer.js';
import AddFood from './components/Layout/AddFood';

function App() {
  const [foods, setFoods] = useState([]);
  const [showAddFood, setShowAddFood] = useState(false);

  const handleAddFood = (food) => {
    setFoods([...foods, food]);
  };

  const handleMenuClick = () => {
  };

  return (
    <div className="App">
      <Header onMenuClick={handleMenuClick} />
      <Home foods={foods} />
      <Footer />
      {showAddFood && <AddFood onAdd={handleAddFood} />}
    </div>
  );
}

export default App;