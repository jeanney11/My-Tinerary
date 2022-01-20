import React from "react";


import BoraBora from "../imagenes/Bora-Bora.jpg";
import CraigievarCastle from "../imagenes/CraigievarCastle.jpg"
import Escocia from "../imagenes/Escocia.jpg";
import Noruega from "../imagenes/Noruega.jpg";
import Cancun from "../imagenes/Cancun.jpg";
import Hakoya from "../imagenes/Hakoya.jpg";
import Orlando from "../imagenes/Orlando.jpg"
import SelvaNegra from "../imagenes/SelvaNegra.jpg";
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
              <h2 className="cards_title">Bora-Bora</h2>
              <p className="cards_description">Es una isla del Pacífico Sur al noroeste de Tahití en la Polinesia Francesa. Rodeada de islotes y una laguna turquesa protegida por un arrecife de coral.</p>
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
              <img src={CraigievarCastle} className="cards_image" />
              <h2 className="cards_title">Craigievar Castle</h2>
              <p className="cards_description">El castillo de Craigievar es un castillo con la fachada rosada que se encuentra a unos 9,6 km al sur de Alford, en el condado de Aberdeenshire, en Escocia.</p>
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
              <img src={Hakoya} className="cards_image" />
              <h2 className="cards_title">Hakoya</h2>
              <p className="cards_description">El Hakoya 3,69 kilómetros cuadrados Sandnessundet isla situada en el estrecho entre las islas y Kvaloya Tromsoya en el condado de Troms, Noruega.</p>
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
              <img src={Cancun} className="cards_image" />
              <h2 className="cards_title">Cancún</h2>
              <p className="cards_description">Cancún ubicada en la península de Yucatán, México; limitada con el mar Caribe y  es conocida por sus playas, centros turísticos y vida nocturna.</p>
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
              <img src={Orlando} className="cards_image" />
              <h2 className="cards_title">Orlando, Florida</h2>
              <p className="cards_description">Situado en el centro de Florida, alberga más de una docena de parques temáticos que ofrecen un entretenimiento fantástico para todos.</p>
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
              <img src={SelvaNegra} className="cards_image" />
              <h2 className="cards_title">Selva Negra</h2>
              <p className="cards_description">Esta región alemana está localizada junto al Valle del Rhin y se caracteriza por sus extensos bosques de abetos y pinos. </p>
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