

import React, { useState } from 'react';
import si1 from '../img/si1.jpg';
import si2 from '../img/si2.jpg';
import si3 from '../img/si3.jpg';

function Slider() {
  const [value, setValue] = useState(50);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="slider">
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={handleChange}
      />
      <p>Value: <span id="slider-value">{value}</span></p>
      <section className="sale center">
          
          <div className="sale__item">
            <a className="header__link-site" href="catalog_w.html">
              
              <img src={si1} alt="photo_promo"/>
            </a>
            <div className="sale__content">
              <p className="sale__text">30% OFF</p>
              <h3 className="sale__heading">FOR WOMEN</h3>
            </div>
          </div>
          <div className="sale__item">
            
            <img src={si2} alt="photo_promo"/>
            <div className="sale__content">
              <p className="sale__text">30% OFF</p>
              <h3 className="sale__heading">FOR WOMEN</h3>
            </div>
          </div>
          <div className="sale__item">
            
            <img src={si3} alt="photo_promo"/>
            <div className="sale__content">
              <p className="sale__text">30% OFF</p>
              <h3 className="sale__heading">FOR WOMEN</h3>
            </div>
          </div>
          <div className="sale__item sale__item_big">
            
            
          </div>
        </section>
    </div>
  );
}

export default Slider;