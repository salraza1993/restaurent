import React, { useState } from 'react';
import Card from './Card';
import Heading from './Heading';
import Menu from './menuAPI';
import Navigation from './Navigation';
import './Restaurent.css';

const Restaurent = () => {

    const [menuData, setMenuData] = useState(Menu);

    return (
        <section className="restaurentCardSection pb-5">
            <Heading />
            <Navigation />
            <div className="container">
                <div className="row gy-4">
                    <Card menuData={menuData} />
                </div>
            </div>
        </section>
    );
}

export default Restaurent;
