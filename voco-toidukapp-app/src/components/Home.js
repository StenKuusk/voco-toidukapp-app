import React, { useState } from 'react';
import logo from '../images/logos/img2.svg'; // Asenda õige logofaili teega
import noFoodLogo from '../images/logos/img6.svg'; // Asenda õige logofaili teega

const Home = ({ foods }) => {
  const [selectedLocation, setSelectedLocation] = useState('Kopli');

  const filteredFoods = foods.filter(food => food.location === selectedLocation);

  return (
    <div className="home">
      <div className="promo-section">
        <h2>Mille järgi sul täna isu on?</h2>
        <img src={logo} className="promo-logo" alt="logo" />
      </div>
      <div className="toggle-buttons">
        <button onClick={() => setSelectedLocation('Kopli')}>Kopli</button>
        <button onClick={() => setSelectedLocation('Põllu')}>Põllu</button>
      </div>
      <h3>Viimati lisatud toidud</h3>
      <div className="food-list">
        {filteredFoods.length > 0 ? (
          filteredFoods.map((food, index) => (
            <div key={index} className="food-item">
              <img src={food.image} alt={food.name} />
              <p>{food.name}</p>
              <p>{food.expiry}</p>
            </div>
          ))
        ) : (
          <div className="no-food">
            <img src={noFoodLogo} alt="No food" />
            <p>Ups! Praegu hetkel kapis pole ühtegi toitu.</p>
          </div>
        )}
      </div>
      <button>{filteredFoods.length > 0 ? 'Vaata kõike toite _ kappis' : 'Lisa ise midagi kappi!'}</button>
    </div>
  );
};

export default Home;