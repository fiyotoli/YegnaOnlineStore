import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import LatestProduct from './LatestProduct';
import AOS from 'aos';
import 'aos/dist/aos.css';

function LatestCollection() {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(8);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, [products]);

  const handleExploreMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  return (
    <div className="container my-5">
      {/* Title Section */}
      <div className="text-center mb-4" data-aos="zoom-in">
        <div className="text-center my-4">
          <h2 className="d-inline-flex align-items-center justify-content-center">
            <span
              className="bg-primary me-2"
              style={{
                borderRadius: '50px',
                width: '30px',
                height: '3px',
                display: 'inline-block',
              }}></span>
            Latest Collection
          </h2>
        </div>
        <p className="text-muted">
          Discover our latest collection featuring stylish new arrivals for every
          season. Shop now to stay ahead of the trend with comfort and confidence!
        </p>
      </div>

      {/* Rendering Products */}
      <div
        className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3"
        data-aos="fade-up"
      >
        {latestProducts.slice(0, visibleCount).map((item, index) => (
          <LatestProduct
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
            description={item.description}
          />
        ))}
      </div>

      {/* Explore More Button */}
      {visibleCount < latestProducts.length && (
        <div className="text-center mt-4" data-aos="zoom-in">
          <button
            className="btn btn-outline-primary"
            style={{ cursor: 'pointer' }}
            onClick={handleExploreMore}>
            Explore More...
          </button>
        </div>
      )}
    </div>
  );
}

export default LatestCollection;
