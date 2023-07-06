import React from 'react';
import ProductCard from './ProductCard';
import './Products.css';
import productData from './Products.json';
import LandingImage from './static/images/landing_page_image.png';

function Products(){
    return(
        <div className="products-container">
            {productData.map((product, index) => 
                <ProductCard
                  key={index}
                  imgAlt={product.imgAlt}
                  imgSrc={LandingImage}
                  title={product.title}
                  description={product.description}
                />
            )}
        </div>
    );
}

export default Products;