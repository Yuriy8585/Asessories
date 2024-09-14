import React from 'react';

import Product from './items/Product';
import promo from '../img/promo.jpg';
import si1 from '../img/si1.jpg';
import si2 from '../img/si2.jpg';
import si3 from '../img/si3.jpg';
import sibig from '../img/sibig.jpg';





function HomePage() {
  return (
    <div>
    
  
  
      
      
        <section className="promo">
        
          <div className="promo__img">
            <img src={promo} alt="photo_promo"/>
          </div>
          <div className="promo__content">
            <div className="promo__info">
              <h1 className="promo__title">THE BRAND</h1>
              <h2 className="promo__heading">OF LUXERIOUS ASESSORIES</h2>
            </div>
          </div>
        </section>
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
            
            <img src={sibig} alt="photo_promo"/>
            <div className="sale__content">
              <p className="sale__text">30% OFF</p>
              <h3 className="sale__heading">FOR WOMEN</h3>
            </div>
          </div>
        </section>

        <Product/>
        
        
    </div>
        
  );
}

export default HomePage;