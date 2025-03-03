import React from 'react';
import FoodList from '../components/FoodList';
import SearchBar from '../components/SearchBar';

const Home: React.FC = () => {
    return (
        <div>
            <h1>VOCO Toidukapp</h1>
            <SearchBar />
            <FoodList />
        </div>
    );
};

export default Home;