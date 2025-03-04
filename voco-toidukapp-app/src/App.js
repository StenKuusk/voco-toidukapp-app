import React, { useState } from 'react';
import './App.css';
import Header from './components/Layout/Header/Header.js';
import Home from './pages/Homepage_kopli/Homepage_kopli';
import Footer from './components/Layout/Footer/Footer.js';
import AddFood from './components/Layout/AddFood';
import BurgerMenu from './components/Layout/Burgermenu/Burgermenu.js';

function App() {
  const [foods, setFoods] = useState([]);
  const [showAddFood, setShowAddFood] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  const handleMenuClick = () => {
    setSidebarOpen(true);
  };
  
  const handleSidebarClose = () => {
    setSidebarOpen(false);
  };

  const handleAddFood = (food) => {
    setFoods([...foods, food]);
  };

  return (
    <div className="App">
      <Header onMenuClick={handleMenuClick} />
      <Home foods={foods} />
      <Footer />
      {showAddFood && <AddFood onAdd={handleAddFood} />}
      <BurgerMenu isOpen={sidebarOpen} onClose={handleSidebarClose} />
    </div>
  );
}

export default App;