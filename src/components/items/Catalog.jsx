import React from 'react';
import SideMenu from './SideMenu';
import Filter from '../Filter';
import MenTools from './tools/Men';

function Catalog(props) {
  return (
    <div>
     
      <>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap"
          rel="stylesheet"
        />
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Men</title>
        
        <div className="top">
       
          <SideMenu/>
          <Filter/>
          <MenTools gistsArray={props.gistsArray}/>
          
          <section className="advantages center">
          
            <article className="advantages__item">
              <img className="advantages__img" src="img/advantages-img.svg" alt="" />
              <h3 className="advantages__heading">Free Delivery</h3>
              <p className="advantages__text">
                Worldwide delivery on all. Authorit tively morph next-generation innov
                tion with extensive models.
              </p>
            </article>
            <article className="advantages__item">
              <img className="advantages__img" src="img/advantages-img.svg" alt="" />
              <h3 className="advantages__heading">Free Delivery</h3>
              <p className="advantages__text">
                Worldwide delivery on all. Authorit tively morph next-generation innov
                tion with extensive models.
              </p>
            </article>
            <article className="advantages__item">
              <img className="advantages__img" src="img/advantages-img.svg" alt="" />
              <h3 className="advantages__heading">Free Delivery</h3>
              <p className="advantages__text">
                Worldwide delivery on all. Authorit tively morph next-generation innov
                tion with extensive models.
              </p>
            </article>
          </section>
          
        </div>
      </>
     

    </div>
  );
}

export default Catalog;