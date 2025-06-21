import { React, useContext, useEffect } from 'react';
import { assets } from '../assets/assets';
import logo from '../assets/yegna.png';
import { Link, NavLink } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

function Navbar() {
  const { setShowSearch, getCartCount, setToken, token, navigate, setCartItems } = useContext(ShopContext);

  const logout = () => {
    navigate('/login');
    localStorage.removeItem('token');
    setToken('');
    setCartItems({});
  };

  useEffect(() => {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const navbarCollapse = document.getElementById('navbarNav');

    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        if (window.innerWidth < 992) {
          const bsCollapse = new window.bootstrap.Collapse(navbarCollapse, {
            toggle: false
          });
          bsCollapse.hide();
        }
      });
    });

    return () => {
      navLinks.forEach((link) => {
        link.removeEventListener('click', () => {});
      });
    };
  }, []);

  // Toggle between hamburger and close icon
  useEffect(() => {
    const toggler = document.querySelector('.navbar-toggler');
    const menuIcon = toggler.querySelector('.navbar-toggler-icon');
    const closeIcon = toggler.querySelector('.close-icon');

    const toggleIcons = () => {
      const isExpanded = toggler.getAttribute('aria-expanded') === 'true';
      if (isExpanded) {
        menuIcon.classList.add('d-none');
        closeIcon.classList.remove('d-none');
      } else {
        menuIcon.classList.remove('d-none');
        closeIcon.classList.add('d-none');
      }
    };

    toggler.addEventListener('click', () => {
      setTimeout(toggleIcons, 200); // wait for Bootstrap collapse
    });

    return () => {
      toggler.removeEventListener('click', toggleIcons);
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-lg fixed-top ">
      <div className="container ">
        {/* Logo */}
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Logo" style={{ width: 'auto', height: '70px' }} />
        </Link>

        {/* Navbar Toggler for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
          <span className="close-icon d-none" style={{ fontSize: '1.5rem' }}>&times;</span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto text-center">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/collection"
                style={({ isActive }) => ({
                  fontWeight: isActive ? 'bold' : 'normal',
                  color: isActive ? '#0d6efd' : 'inherit',
                  transition: '0.3s'
                })}
              >
                Collection
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/contact"
                style={({ isActive }) => ({
                  fontWeight: isActive ? 'bold' : 'normal',
                  color: isActive ? '#0d6efd' : 'inherit',
                  transition: '0.3s'
                })}
              >
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/about"
                style={({ isActive }) => ({
                  fontWeight: isActive ? 'bold' : 'normal',
                  color: isActive ? '#0d6efd' : 'inherit',
                  transition: '0.3s'
                })}
              >
                About
              </NavLink>
            </li>
          </ul>

          {/* Right Section */}
          <div className="d-flex align-items-center justify-content-center mt-3 mt-lg-0">
           

            {/* Profile Dropdown */}
            <div className="dropdown me-3">
              <img
                onClick={() => (token ? null : navigate('/login'))}
                src={assets.profile_icon}
                alt="Profile"
                className="img-fluid dropdown-toggle"
                style={{ width: '24px', cursor: 'pointer' }}
                data-bs-toggle="dropdown"
                aria-expanded="false"
              />
              {token && (
                <ul className="dropdown-menu dropdown-menu-end">
                  <li>
                    <Link onClick={() => navigate('/orders')} className="dropdown-item" to="/orders">
                      Orders
                    </Link>
                  </li>
                  <li>
                    <button className="dropdown-item" onClick={logout}>
                      Logout
                    </button>
                  </li>
                </ul>
              )}
            </div>

            {/* Cart Icon */}
            <Link to="/cart" className="position-relative">
              <img
                src={assets.cart_icon}
                alt="Cart"
                className="img-fluid"
                style={{ width: '24px' }}
              />
              <span
                className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger text-white"
                style={{ fontSize: '10px' }}
              >
                {getCartCount()}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
