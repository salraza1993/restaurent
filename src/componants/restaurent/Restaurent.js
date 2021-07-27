import React, { useState } from 'react';
import Card from './Card';
import Heading from './Heading';
import Menu from './menuAPI';
import Navigation from './Navigation';
import './Restaurent.css';


const uniqueList = [
    ...new Set(
        Menu.map((currentVal) => {
            return currentVal.category;
        })
    ),
    "All", 
];
console.log(uniqueList);

const Restaurent = () => {
    
    const [menuData, setMenuData] = useState(Menu);
    const [menuList, setMenuList] = useState(uniqueList);
    
    const categoryItems = Menu.map((curentElem) => {
        return curentElem.category;
    });
    console.log(categoryItems);

    // Menu card items filtering 
    const filterItems = (category) => {
        if (category === "All") {
            return setMenuData(Menu);
        }
        const updatedList = Menu.filter((curElem) => {
            return curElem.category === category;
        });
        setMenuData(updatedList);
    }
    
    

    return (
        <section className="restaurentCardSection pb-5">
            <Heading />
            <Navigation menuList={ menuList } filterItems={ filterItems } />
            {/* <>
                <button type="button" onClick={ () => filterItems("breakfast") } className="active"> Item 1 </button>
                
            </> */}
            
            <div className="container">
                <div className="row gy-4">
                    <Card menuData={ menuData } />
                </div>
            </div>
        </section>
    );
}

export default Restaurent;
