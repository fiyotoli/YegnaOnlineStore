import {React,useContext} from 'react';
import { assets } from '../assets/assets';
import { Link, NavLink } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

function Navbar() {
   const {setShowSearch,getCartCount,setToken,token,navigate,setCartItems}= useContext(ShopContext);
   
   const logout=()=>{
    navigate('/login')
    localStorage.removeItem('token')
    setToken('')
    setCartItems({})
   
   }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container">
        {/* Logo */}
        <Link className="navbar-brand" to="/">
          <img src={assets.logo} alt="Logo" className="img-fluid" style={{ height: '40px' }} />
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
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/collection">
                Collection
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
          </ul>

          {/* Right Section */}
          <div className="d-flex align-items-center">
            {/* Search Icon */}
            <img
              src={assets.search_icon}
              alt="Search"
              onClick={()=>setShowSearch(true) }
              className="img-fluid me-3"
              style={{ width: '24px', cursor: 'pointer' }}
            />

            {/* Profile Dropdown */}
            <div className="dropdown me-3">
           
              <img
              onClick={()=> token ? null : navigate('/login')}
                src={assets.profile_icon}
                alt="Profile"
                className="img-fluid dropdown-toggle"
                style={{ width: '24px', cursor: 'pointer' }}
                data-bs-toggle="dropdown"
                aria-expanded="false"
              />
             { token && <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <Link className="dropdown-item" to="/profile">
                    My Profile
                  </Link>
                </li>
                <li>
                  <Link onClick={()=>navigate('/orders')} className="dropdown-item" to="/orders">
                    Orders
                  </Link>
                </li>
                <li>
                  <button className="dropdown-item" onClick={logout}>
                    Logout
                  </button>
                </li>
              </ul>

             }
              
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
                className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark text-white"
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
