import React from 'react';

const About: React.FC = () => {
    return (
        <div>
            <h1>About VOCO Toidukapp</h1>
            <p>
                VOCO Toidukapp is an application designed to help manage a community food cabinet, aimed at sharing surplus food that is still safe to consume. 
            </p>
            <h2>Purpose</h2>
            <p>
                The main goal of this application is to provide users with an easy way to add food items to the cabinet, find food within the cabinet, and view information about sharing and location.
            </p>
            <h2>How to Use</h2>
            <p>
                Users can add food items by filling out a form with the food name, addition date, estimated expiration, and any comments. 
                They can also search for food items by name or category and filter the list based on expiration dates.
            </p>
            <h2>Community Responsibility</h2>
            <p>
                By using this application, you contribute to reducing food waste and promoting community cooperation by sharing food with those in need.
            </p>
        </div>
    );
};

export default About;