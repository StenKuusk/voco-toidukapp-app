import axios from 'axios';

const API_BASE_URL = 'https://your-api-url.com/api'; // Replace with your actual API URL

export const getFoodItems = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/food`);
        return response.data;
    } catch (error) {
        console.error('Error fetching food items:', error);
        throw error;
    }
};

export const addFoodItem = async (foodItem) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/food`, foodItem);
        return response.data;
    } catch (error) {
        console.error('Error adding food item:', error);
        throw error;
    }
};

export const deleteFoodItem = async (id) => {
    try {
        await axios.delete(`${API_BASE_URL}/food/${id}`);
    } catch (error) {
        console.error('Error deleting food item:', error);
        throw error;
    }
};