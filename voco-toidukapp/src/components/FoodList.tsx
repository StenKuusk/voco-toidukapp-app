import React from 'react';
import FoodItem from './FoodItem';

interface Food {
  id: number;
  name: string;
  additionDate: string;
  estimatedExpiration?: string;
  category: string;
  comments?: string;
}

interface FoodListProps {
  foods: Food[];
  onFoodTaken: (id: number) => void;
}

const FoodList: React.FC<FoodListProps> = ({ foods, onFoodTaken }) => {
  return (
    <div>
      <h2>Food List</h2>
      {foods.length === 0 ? (
        <p>No food items available.</p>
      ) : (
        <ul>
          {foods.map(food => (
            <FoodItem key={food.id} food={food} onFoodTaken={onFoodTaken} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default FoodList;