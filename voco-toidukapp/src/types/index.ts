export interface FoodItem {
    id: string;
    name: string;
    additionDate: Date;
    estimatedExpiration?: Date;
    category: string;
    comments?: string;
}

export interface User {
    id: string;
    username: string;
    role: 'user' | 'admin';
}

export interface CabinetInfo {
    location: string;
    openingHours: string;
    rules: string;
}