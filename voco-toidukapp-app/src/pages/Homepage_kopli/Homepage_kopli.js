import React, { useState } from 'react';
import './Homepage_kopli.css';

const Home = ({ foods }) => {
  const [selectedLocation, setSelectedLocation] = useState('Kopli');

  const filteredFoods = foods.filter(food => food.location === selectedLocation);

  return (
    <div className="home-container">
      <div className="promo-section">
        <h2 className="promo-text">Mille järgi sul täna isu on?</h2>
        <img src="/assets/logos/img2.svg" className="promo-logo" alt="Kährik kapiga" />
      </div>
      <div className="toggle-buttons">
        <button 
          className={selectedLocation === 'Kopli' ? 'active' : ''} 
          onClick={() => setSelectedLocation('Kopli')}
        >
          Kopli
        </button>
        <button 
          className={selectedLocation === 'Põllu' ? 'active' : ''} 
          onClick={() => setSelectedLocation('Põllu')}
        >
          Põllu
        </button>
      </div>
      <h3 className="food-header">Viimati lisatud toidud</h3>
      <div className="food-list">
        {filteredFoods.length > 0 ? (
          filteredFoods.slice(0, 3).map((food, index) => ( 
            <div key={index} className="food-item">
              <img src={food.image} alt={food.name} className="food-image" />
              <div className="food-details">
                <p className="food-name">{food.name}</p>
                <p className="food-expiry">{food.expiry}</p>
              </div>
              <p className="food-time">10:00</p> 
            </div>
          ))
        ) : (
          <div className="no-food">
            <img src="/assets/logos/img6.svg" alt="No food" className="no-food-image" />
            <p>Ups! Praegu hetkel kapis pole ühtegi toitu.</p>
          </div>
        )}
      </div>
      <button className="view-all-button">
        {filteredFoods.length > 0 ? 'Vaata kõiki toite Kopli kapis' : 'Lisa ise midagi kappi!'}
      </button>
    </div>
  );
};

export default Home;