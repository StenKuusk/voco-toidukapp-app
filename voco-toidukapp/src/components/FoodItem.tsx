import React from 'react';

interface FoodItemProps {
    name: string;
    additionDate: string;
    expirationDate?: string;
    category: string;
    onTake: () => void;
}

const FoodItem: React.FC<FoodItemProps> = ({ name, additionDate, expirationDate, category, onTake }) => {
    return (
        <div className="food-item">
            <h3>{name}</h3>
            <p>Added on: {additionDate}</p>
            {expirationDate && <p>Expires on: {expirationDate}</p>}
            <p>Category: {category}</p>
            <button onClick={onTake}>Taken</button>
        </div>
    );
};

export default FoodItem;