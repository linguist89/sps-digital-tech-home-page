import React from 'react';
import './BodyComponent.css';
import LandingImage from './static/images/landing_page_image.png';
import { Button } from 'flowbite-react';

function BodyComponent(){
  return (
    <div className="body-component">
      <div className="left-section">
        <h1 className="title">SPS Digital Tech</h1>
        <h2 className="subtitle">Building tools you need, so you can focus on what you want.</h2>
        <div className="button-group">
          <Button className="bg-white text-landing-page">Products</Button>
          <Button className="border-white hover:border-white hover:bg-landing-page bg-transparent">Contact</Button>
        </div>
      </div>
      <div className="right-section">
        <img src={LandingImage} alt="Custom" className="custom-image" />
      </div>
    </div>
  );
};

export default BodyComponent;
