import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';
import { FaInfoCircle, FaStar, FaStarHalfAlt } from 'react-icons/fa';

const ProductItem = ({ id, image, name, price, description }) => {
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
                        <h5 className="card-title text-truncate">{name}</h5>

                       

                        {/* Description */}
                        <div
                            className="d-inline-flex align-items-center px-2 py-1 rounded mb-2"
                            style={{ backgroundColor: 'rgba(220,53,69,0.2)', fontSize: '14px' }}
                        >
                            <FaInfoCircle className="me-2" />
                            <span className="text-danger" style={{ opacity: 0.8, display: '-webkit-box', WebkitBoxOrient: 'vertical', overflow: 'hidden', WebkitLineClamp: 2, textOverflow: 'ellipsis' }}>
                                {description || 'No description available'} ·
                            </span>
                        </div>

                        {/* Price */}
                        <div className="">
                           <span className='d-inline-block bg-primary text-white rounded px-5 py-1 fw-bold mt-2'>
                           {currency}{price}
                           </span>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default ProductItem;
