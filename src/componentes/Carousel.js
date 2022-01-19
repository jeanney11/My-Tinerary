import React from "react";


import BoraBora from "../imagenes/Bora-Bora.jpg";
import Escocia from "../imagenes/Escocia.jpg";
import Noruega from "../imagenes/Noruega.jpg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CardSlide from "./CardSlide";


function carousel() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
  

    <div className="tour"> 
      <Carousel responsive={responsive} containerClass="text">
      

        <div className="containerCards">
          <div className="cards">
            <div className="cards_body">
              <img src={BoraBora} className="cards_image"  />
              <h2 className="cards_title">Noruega</h2>
              <p className="cards_description">Un lugar para soñar</p>
            </div>
            <button className="cards_btn"><a href="#">See More</a></button>
            <div class="cards_costo">
              <h2>900$</h2>
              <h4>7 días / 6 noches</h4>
            </div>
          </div>
        </div>

        <div className="containerCards">
          <div className="cards">
            <div className="cards_body">
              <img src={BoraBora} className="cards_image" />
              <h2 className="cards_title">Noruega</h2>
              <p className="cards_description">Un lugar para soñar bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb   nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn</p>
            </div>
            <button className="cards_btn"><a href="#">See More</a></button>
            <div class="cards_costo">
              <h2>900$</h2>
              <h4>7 días / 6 noches</h4>
            </div>
          </div>         
        </div>

        <div className="containerCards">
          <div className="cards">
            <div className="cards_body">
              <img src={BoraBora} className="cards_image" />
              <h2 className="cards_title">Noruega</h2>
              <p className="cards_description">Un lugar para soñar</p>
            </div>
            <button className="cards_btn"><a href="#">See More</a></button>
            <div class="cards_costo">
              <h2>900$</h2>
              <h4>7 días / 6 noches</h4>
            </div>
          </div>         
        </div>

        <div className="containerCards">
          <div className="cards">
            <div className="cards_body">
              <img src={BoraBora} className="cards_image" />
              <h2 className="cards_title">Noruega</h2>
              <p className="cards_description">Un lugar para soñar</p>
            </div>
            <button className="cards_btn"><a href="#">See More</a></button>
            <div class="cards_costo">
              <h2>900$</h2>
              <h4>7 días / 6 noches</h4>
            </div>
          </div>         
        </div>

        <div className="containerCards">
          <div className="cards">
            <div className="cards_body">
              <img src={BoraBora} className="cards_image" />
              <h2 className="cards_title">Noruega</h2>
              <p className="cards_description">Un lugar para soñar</p>
            </div>
            <button className="cards_btn"><a href="#">See More</a></button>
            <div class="cards_costo">
              <h2>900$</h2>
              <h4>7 días / 6 noches</h4>
            </div>
          </div>         
        </div>

        <div className="containerCards">
          <div className="cards">
            <div className="cards_body">
              <img src={BoraBora} className="cards_image" />
              <h2 className="cards_title">Noruega</h2>
              <p className="cards_description">Un lugar para soñar</p>
            </div>
            <button className="cards_btn"><a href="#">See More</a></button>
            <div class="cards_costo">
              <h2>900$</h2>
              <h4>7 días / 6 noches</h4>
            </div>
          </div>         
        </div>

       
        
    </Carousel>;
    </div>


  )
}

export default carousel;