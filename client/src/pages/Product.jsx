import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import RelatedProducts from '../components/RelatedProducts';
import { assets } from '../assets/assets';

const Product = () => {
  const { productId } = useParams();
  const { products, currency,addToCart } = useContext(ShopContext);
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
  }, [productId, products]);

  return productData ? (
    <div className="container mt-5">
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
                className="img-thumbnail me-2"
                style={{ width: '50px', height: '50px', cursor: 'pointer' }}
              />
            ))}
          </div>
          <div className="text-center">
            <img src={image} alt="product" className="img-fluid" />
          </div>
        </div>

        {/* Product Info Section */}
        <div className="col-md-6">
          <h1 className="mb-3">{productData.name}</h1>
          <div className="d-flex align-items-center mb-3">
            {[...Array(4)].map((_, index) => (
              <img src={assets.star_icon} alt="star" key={index} className="me-1" />
            ))}
            <img src={assets.star_dull_icon} alt="star-dull" className="me-2" />
            <p className="mb-0">123 reviews</p>
          </div>
          <h3 className="text-danger">{currency}{productData.price}</h3>
          <p>{productData.description}</p>

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

          <button  onClick={()=>addToCart(productData._id,size) } className="btn btn-success">Add to Cart</button>
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
