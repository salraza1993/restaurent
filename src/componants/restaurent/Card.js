import React from 'react';

const Card = ({ menuData }) => {
    return (
        <>
            {menuData.map((currentData) => {
                const { id, image, name, category, price, description } = currentData;
                return <div className="col-12 col-md-6 col-lg-4" key={id}>
                    <div className="card">
                        <div className="imgBlock">
                            <button type="button" className="foodTag btn btn-light">{ category }</button>
                            <img src={ image } className="card-img-top" alt="Food" />
                        </div>
                        <div className="card-body d-flex justify-content-between flex-column">
                            <div className="">
                                <h5 className="card-title">{ name }</h5>
                                <p className="card-text mb-4"> { description } </p>
                            </div>
                            <div className="d-flex justify-content-between">
                                <div type="button" className="btn btn-light priceTag">
                                    <i className="fas fa-rupee-sign me-2"></i>
                                    <span className="foodPrice bold">{price}</span>
                                </div>
                                <div className="btn btn-primary">Order Now</div>
                            </div>
                        </div>
                    </div>
                </div>                    
            })}
        </>
    );
}

export default Card;
