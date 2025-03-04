import React, { useState } from 'react';
import './Homepage_kopli.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const HomepageKopli = () => {
  const [selectedLocation, setSelectedLocation] = useState('Kopli');
  const [currentIndex, setCurrentIndex] = useState(0);

  const foods = [
    { name: 'Banaan', expiry: '01.03.2025', location: 'Kopli', image: '/assets/food/banana.png', icon: 'assets/icons/Puuviljad.svg' },
    { name: 'Söörikud', expiry: '27.02.2025', location: 'Kopli', image: '/assets/food/donut.png', icon: 'assets/icons/Magus.svg' },
    { name: 'Sai', expiry: '10.03.2025', location: 'Kopli', image: '/assets/food/bread.png', icon: 'assets/icons/Pagaritooted.svg' },
    { name: 'Kartul', expiry: '15.03.2025', location: 'Kopli', image: '/assets/food/potato.png', icon: 'assets/icons/Konservid.svg' },
    { name: 'Tomat', expiry: '20.03.2025', location: 'Kopli', image: '/assets/food/tomato.png', icon: 'assets/icons/Juurviljad.svg' },
    { name: 'Kurk', expiry: '25.03.2025', location: 'Kopli', image: '/assets/food/cucumber.png', icon: 'assets/icons/Juurviljad.svg' },
  ];

  const filteredFoods = foods.filter(food => food.location === selectedLocation);
  
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === Math.max(0, filteredFoods.length - 3) ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? Math.max(0, filteredFoods.length - 3) : prevIndex - 1
    );
  };
  
  const visibleItems = filteredFoods.slice(currentIndex, currentIndex + 3);
  
  while (visibleItems.length < 3 && filteredFoods.length > 0) {
    visibleItems.push(filteredFoods[visibleItems.length % filteredFoods.length]);
  }

  return (
    <div className="home-container">
      <div className="promo-section">
        <div className="promo-text-container">
          <h2 className="promo-text">Mille&nbsp;järgi sul täna isu on?</h2>
        </div>
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
      {selectedLocation === 'Kopli' && (
        <h3 className="food-header">Viimati lisatud toidud</h3>
      )}
      <div className="food-list">
        {filteredFoods.length > 0 ? (
          <div className="custom-carousel">
            <button className="carousel-control prev" onClick={prevSlide}>
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            
            <div className="carousel-items">
              {visibleItems.map((food, index) => (
                <div key={index} className="food-item">
                  <div className="food-image-container">
                    <img src={food.icon} alt={`${food.name} icon`} className="food-icon" />
                    <img src={food.image} alt={food.name} className="food-image" />
                  </div>
                  <div className="food-details">
                    <p className="food-name">{food.name}</p>
                    <p className="food-expiry">{food.expiry}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <button className="carousel-control next" onClick={nextSlide}>
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        ) : (
          <div className="no-food">
            <img src="/assets/logos/img6.svg" alt="No food" className="no-food-image" />
            <p>Ups! Praegu hetkel kapis pole ühtegi toitu.</p>
          </div>
        )}
      </div>
      <button className="view-all-button">
        {filteredFoods.length > 0 ? `Vaata kõiki toite ${selectedLocation} kapis` : 'Lisa ise midagi kappi!'}
      </button>
    </div>
  );
};

export default HomepageKopli;