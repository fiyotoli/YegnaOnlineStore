import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';

const ProductItem = ({ id, image, name, price }) => {
    const { currency } = useContext(ShopContext);

    return (
        <div className="col">
            <Link to={`/product/${id}`} className="text-decoration-none">
                <div className="card h-100 shadow-sm">
                    <img
                        src={image[0]}
                        alt={name}
                        className="card-img-top"
                        style={{ objectFit: 'cover', height: '250px', width: '100%' }}
                    />
                    <div className="card-body d-flex flex-column justify-content-between text-center">
                        <h5 className="card-title text-truncate">{name}</h5>
                        <p className="card-text fw-bold">
                            {currency}
                            {price}
                        </p>
                           </div>
                </div>
            </Link>
        </div>
    );
};

export default ProductItem;
