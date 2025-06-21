import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

function LatestCollection() {
    const { products } = useContext(ShopContext);
    const [latestProducts, setLatestProducts] = useState([]);

    useEffect(() => {
        setLatestProducts(products.slice(0, 10));
    }, [products]);

    return (
        <div className="container my-5">
            {/* Title Section */}
            <div className="text-center mb-4">
                <Title text1="LATEST" text2="COLLECTIONS" />
                <p className="text-muted">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum enim eaque consectetur culpa velit eius dolor quod officiis deleniti, similique excepturi aspernatur, assumenda alias odit, sed odio aliquam tenetur.
                </p>
            </div>

            {/* Rendering Products */}
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">
                {latestProducts.map((item, index) => (
                    <ProductItem
                        key={index}
                        id={item._id}
                        image={item.image}
                        name={item.name}
                        price={item.price}
                    />
                ))}
            </div>
        </div>
    );
}

export default LatestCollection;
