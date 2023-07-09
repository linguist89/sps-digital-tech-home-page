import React from 'react';
import './BodyComponent.css';
import LandingImage from './static/images/landing_page_image.png';
import './Buttons.css';
import ContactDialog from './ContactDialog';

function BodyComponent(){

  const scrollToProducts = () => {
    const element = document.getElementById('products-component');
    const rect = element.getBoundingClientRect();
    window.scrollTo({
      top: rect.top - 70,
      behavior: 'smooth'
    });
  };

  return (
    <div className="body-component">
      <div className="left-section">
        <h1 className="title">SPS Digital Tech</h1>
        <h2 className="subtitle">Building the tools you need, so you can focus on what you want.</h2>
        <div className="button-group">
          <button className="solid-button" onClick={scrollToProducts}>Products</button>
          <ContactDialog className="transparent-button"></ContactDialog>
        </div>
      </div>
      <div className="right-section">
        <img src={LandingImage} alt="Custom" className="custom-image" />
      </div>
    </div>
  );
};

export default BodyComponent;
