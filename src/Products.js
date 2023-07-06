import React from 'react';
import ProductCard from './ProductCard';
import './Products.css';
import productData from './Products.json';
import BusinessIdeas from './static/images/business_ideas_image_lightbulb_v4.png';
import YoutubeInsights from './static/images/youtube_insights_woman.png';
import Pseudocode from './static/images/pseudocode_image.png';
import AnvilTemplates from './static/images/anvil_templates.png';
import LanguageClips from './static/images/language_clips.png';

function Products(){
    const images = {
        'product 1': BusinessIdeas,
        'product 2': YoutubeInsights,
        'product 3': Pseudocode,
        'product 4': AnvilTemplates,
        'product 5': LanguageClips
    }

    return(
        <div className="products-container">
            {productData.map((product, index) => 
                <ProductCard
                  key={index}
                  imgAlt={product.imgAlt}
                  imgSrc={images[product.imgSrc]}
                  title={product.title}
                  description={product.description}
                />
            )}
        </div>
    );
}

export default Products;