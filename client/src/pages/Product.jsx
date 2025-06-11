import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import RelatedProducts from '../components/RelatedProducts';
import { assets } from '../assets/assets';
import { FaInfoCircle, FaStar, FaStarHalfAlt } from 'react-icons/fa'; // Added React icons

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');

  const fetchProductData = async () => {
    products.forEach((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
      }
    });
  };

 useEffect(() => {
  fetchProductData();
  window.scrollTo(0, 0); // Scroll to top when productId changes
}, [productId, products]);


  return productData ? (
    <div className="container mt-5 pt-5">
      {/* Product Details */}
      <div className="row">
        {/* Product Image Section */}
        <div className="col-md-6">
          <div className="d-flex mb-3">
            {productData.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                key={index}
                alt="product-thumbnail"
                className="img-thumbnail me-2 mt-3"
                style={{ objectFit: 'contain',width: '50px', height: '50px', cursor: 'pointer' }}
              />
            ))}
          </div>
          <div className="text-center">
            <img src={image} alt="product" className="img-fluid" />
          </div>
        </div>

        {/* Product Info Section */}
        <div className="col-md-6">
          <h1 className="mb-1 mt-3 text-capitalize">{productData.name}</h1>
          

          {/* Price and Description in Different Columns */}
          <div className="">
           

            {/* Description Column */}
            <div className="col">
              <div
                className="d-inline-flex align-items-left  py-1 rounded mb-1"
                style={{ fontSize: '14px' }}
              >
                <FaInfoCircle className="me-2" />
                <span className="" style={{ opacity: 0.8 }}>
                  {productData.description || 'No description available'} ·
                </span>
              </div>
            </div>
             {/* Price Column */}
             <div className="col">
              <span className="d-inline-block bg-primary text-white rounded px-3 py-1 fw-bold mb-2 mt-2">
                {currency}{productData.price}
              </span>
            </div>
          </div>

          {/* Select Size */}
          <div className="mb-3">
            <p className="fw-bold">Select Size</p>
            <div>
              {productData.sizes.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setSize(item)}
                  className={`btn btn-outline-primary me-2 ${item === size ? 'active' : ''}`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <button onClick={() => addToCart(productData._id, size)} className="btn btn-primary">
            Add to Cart
          </button>
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-5">
        <RelatedProducts
          category={productData.category}
          subCategory={productData.subCategory}
        />
      </div>
    </div>
  ) : (
    <div className="text-center mt-5">Loading...</div>
  );
};

export default Product;
