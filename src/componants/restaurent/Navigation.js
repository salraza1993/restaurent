import React from 'react';

const Navigation = () => {
    return (
        <nav className="navigation mb-5 d-flex justify-content-center align-itmes-center">
            <ul className="navigationMenu d-flex justify-content-center">
                <li className="active">All</li>
                <li>Breakfast</li>
                <li>Lunch</li>
                <li>Evening Breakfast</li>
                <li>Dinner</li>
                <li>Meal</li>
            </ul>
        </nav>
    );
}

export default Navigation;
