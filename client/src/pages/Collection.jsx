import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';
import { FiSearch } from 'react-icons/fi';

function Collection() {
  const { products, search, showSearch ,setSearch} = useContext(ShopContext);
  const [filterProducts, setFilterProducts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(9); // initially show 6
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relavent");

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let productsCopy = products.slice();

    if ( search) {
      productsCopy = productsCopy.filter(item =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category)
      );
    }

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }

    setFilterProducts(productsCopy);
    setVisibleCount(6); // Reset visible count on filter change
  };

  const sortProduct = () => {
    let fpCopy = filterProducts.slice();
    switch (sortType) {
      case 'low-high':
        setFilterProducts(fpCopy.sort((a, b) => a.price - b.price));
        break;
      case 'high-low':
        setFilterProducts(fpCopy.sort((a, b) => b.price - a.price));
        break;
      default:
        applyFilter();
        break;
    }
  };

  useEffect(() => {
    setFilterProducts(products);
  }, [products]);

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, search, showSearch]);

  useEffect(() => {
    sortProduct();
  }, [sortType]);

  const handleExploreMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  return (
    <div className="container mb-3 mb-4 mt-5 pt-5 ">

{/* search bar */}
<div className="row justify-content-center mt-2 pt-5">
  <div className="col-md-8 col-lg-7 mb-4">
    <div className="input-group  ">
      <input
        type="text"
        className="form-control rounded-start-pill ps-4 py-2 shadow-sm bg-white"
        placeholder="Search products..."
        value={search}
        onChange={(e) =>
          typeof setSearch === 'function' && setSearch(e.target.value)
        }
      />
      <span className="input-group-text text-white border-start-0 rounded-end-pill bg-primary">
        <FiSearch />
      </span>
    </div>
  </div>
</div>
{/* search bar */}


      <div className="row mt-3">
        {/* Filters */}
        <div className="col-md-3 shadow-sm py-4">
          <div className="mb-4">
            <h5 className="mb-3">Filter</h5>

            {/* Categories */}
            <div className="mb-4">
              <h6>Categories</h6>
              {["Men", "Women", "Kids"].map((cat) => (
                <div className="form-check" key={cat}>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    onChange={toggleCategory}
                    value={cat}
                    id={cat.toLowerCase()}
                  />
                  <label className="form-check-label" htmlFor={cat.toLowerCase()}>
                    {cat}
                  </label>
                </div>
              ))}
            </div>

            {/* Subcategories */}
            <div>
              <h6>Type</h6>
              {["Topwear", "Bottomwear", "Winterwear"].map((sub) => (
                <div className="form-check" key={sub}>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    onChange={toggleSubCategory}
                    value={sub}
                    id={sub.toLowerCase()}
                  />
                  <label className="form-check-label" htmlFor={sub.toLowerCase()}>
                    {sub}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Products */}
        <div className="col-md-9">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-5 gap-3">
            <div className="text-center my-4 display-block">
              <h2 className="d-inline-flex align-items-center justify-content-center">
                <span
                  className="bg-primary me-2"
                  style={{
                    borderRadius: '50px',
                    width: '30px',
                    height: '3px',
                    display: 'inline-block'
                  }}
                ></span>
                All Collections
              </h2>
            </div>
            <select
              className="form-select w-auto"
              onChange={(e) => setSortType(e.target.value)}
              aria-label="Sort by"
            >
              <option value="relavent">Sort by: Relevant</option>
              <option value="low-high">Sort by: Price (Low to High)</option>
              <option value="high-low">Sort by: Price (High to Low)</option>
            </select>
          </div>

          <div className="row g-4">
            {filterProducts.slice(0, visibleCount).map((item, index) => (
              <div key={index} className="col-md-6 col-lg-4">
                <ProductItem
                  id={item._id}
                  image={item.image}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                />
              </div>
            ))}
          </div>

          {/* Explore More Button */}
          {visibleCount < filterProducts.length && (
            <div className="text-center mt-4">
              <button className="btn btn-outline-primary" onClick={handleExploreMore}>
                Explore More
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Collection;
