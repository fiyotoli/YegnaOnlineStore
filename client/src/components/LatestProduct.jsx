import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';
import { FaInfoCircle, FaStar, FaStarHalfAlt } from 'react-icons/fa';

const LatestProduct = ({ id, image, name, price, description }) => {
    const { currency } = useContext(ShopContext);

    return (
        <div className="col">
            <Link to={`/product/${id}`} className="text-decoration-none">
                <div className="card h-100 shadow-sm border-0 overflow-hidden" style={{ transition: 'transform 0.3s, box-shadow 0.3s' }}>
                    
                    {/* Image Container */}
                    <div className="overflow-hidden">
                        <img
                            src={image[0]}
                            alt={name}
                            className="card-img-top product-image"
                            style={{ objectFit: 'contain', height: '300px', width: '100%', transition: 'transform 0.5s' }}
                        />
                    </div>

                    {/* Card Body */}
                    <div className="card-body d-flex flex-column justify-content-between text-start">
                        <h6 className="card-title text-center text-truncate">{name}</h6>

                       

                       

                       
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default LatestProduct;
