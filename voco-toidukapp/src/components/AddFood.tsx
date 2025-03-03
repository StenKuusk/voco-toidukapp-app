import React, { useState } from 'react';

const AddFood: React.FC = () => {
    const [foodName, setFoodName] = useState('');
    const [additionDate, setAdditionDate] = useState('');
    const [expirationDate, setExpirationDate] = useState('');
    const [comments, setComments] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Logic to add food item goes here
        console.log({
            foodName,
            additionDate,
            expirationDate,
            comments,
        });
        // Reset form fields
        setFoodName('');
        setAdditionDate('');
        setExpirationDate('');
        setComments('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Food Name:</label>
                <input
                    type="text"
                    value={foodName}
                    onChange={(e) => setFoodName(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Addition Date:</label>
                <input
                    type="date"
                    value={additionDate}
                    onChange={(e) => setAdditionDate(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Estimated Expiration:</label>
                <input
                    type="date"
                    value={expirationDate}
                    onChange={(e) => setExpirationDate(e.target.value)}
                />
            </div>
            <div>
                <label>Comments:</label>
                <textarea
                    value={comments}
                    onChange={(e) => setComments(e.target.value)}
                />
            </div>
            <button type="submit">Add Food</button>
        </form>
    );
};

export default AddFood;