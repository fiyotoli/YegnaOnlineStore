import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

function Collection() {
  const { products,search,showSearch } = useContext(ShopContext);
  const [filterProducts, setFilterProducts] = useState([]);
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
   
    if (showSearch && search) {
      productsCopy=productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    
      }
        

    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) => category.includes(item.category));
    }

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) => subCategory.includes(item.subCategory));
    }

    setFilterProducts(productsCopy);
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
  }, [category, subCategory,search,showSearch]);

  useEffect(() => {
    sortProduct();
  }, [sortType]);

  return (
    <div className="container mt-4">
      <div className="row">
        {/* Left Side: Filters */}
        <div className="col-md-3">
          <div className="mb-4">
            <h5 className="mb-3">Filter</h5>

            {/* Category Filter */}
            <div className="mb-4">
              <h6>Categories</h6>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  onChange={toggleCategory}
                  value="Men"
                  id="men"
                />
                <label className="form-check-label" htmlFor="men">
                  Men
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  onChange={toggleCategory}
                  value="Women"
                  id="women"
                />
                <label className="form-check-label" htmlFor="women">
                  Women
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  onChange={toggleCategory}
                  value="Kids"
                  id="kids"
                />
                <label className="form-check-label" htmlFor="kids">
                  Kids
                </label>
              </div>
            </div>

            {/* Subcategory Filter */}
            <div>
              <h6>Type</h6>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  onChange={toggleSubCategory}
                  value="Topwear"
                  id="topwear"
                />
                <label className="form-check-label" htmlFor="topwear">
                  Topwear
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  onChange={toggleSubCategory}
                  value="Bottomwear"
                  id="bottomwear"
                />
                <label className="form-check-label" htmlFor="bottomwear">
                  Bottomwear
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  onChange={toggleSubCategory}
                  value="Winterwear"
                  id="winterwear"
                />
                <label className="form-check-label" htmlFor="winterwear">
                  Winterwear
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Products */}
        <div className="col-md-9">
          <div className="d-flex justify-content-between align-items-center mb-5">
            <Title text1="All" text2="COLLECTIONS" />
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
            {filterProducts.map((item, index) => (
              <div key={index} className="col-md-4">
                <ProductItem
                  id={item._id}
                  image={item.image}
                  name={item.name}
                  price={item.price}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collection;
