import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import AddFood from './components/AddFood';

function App() {
  const [foods, setFoods] = useState([]);
  const [showAddFood, setShowAddFood] = useState(false);

  const handleAddFood = (food) => {
    setFoods([...foods, food]);
  };

  const handleMenuClick = () => {
    // Menu click handler
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