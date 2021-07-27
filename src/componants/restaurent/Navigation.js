import React from 'react';

const Navigation = ({ menuList, filterItems }) => {
    return (
        <nav className="navigation mb-5 d-flex justify-content-center align-itmes-center">
            <div className="navigationMenu d-flex justify-content-center">
                {
                    menuList.map((currentList, index) => {
                        return <button type="button" onClick={ () => filterItems( currentList ) } key={ index }> { currentList } </button>
                    })
                }
            </div>
        </nav>
    );
}

export default Navigation;
