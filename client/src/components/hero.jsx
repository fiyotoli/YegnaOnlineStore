import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import advertImage from '../assets/advert1.png'; // adjust if needed
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div id="hero-container" className="container-fluid bg-white mt-5 pt-5 ">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Section: Text */}
          <div
            className="col-12 col-md-6 text-center text-md-start mb-4 mb-md-0 mt-5 mt-md-5 mt-lg-0"
            data-aos="fade-up"
          >
            <h1 className="display-3">
              Welcome to{' '}
              <span className="text-primary fw-bold">Yegna Fashion Store</span>
            </h1>
            <p className="lead">
              Discover the latest trends in fashion with our exclusive collection. Style that speaks for you!
            </p>
            <Link to="/collection" className="btn btn-lg btn-primary">
              Shop Now
            </Link>
          </div>

          {/* Right Section: Image */}
          <div className="col-12 col-md-6 text-center" data-aos="fade-left">
            <img
              src={advertImage}
              alt="Fashion Advert"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
