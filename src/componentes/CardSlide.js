import React from "react";

import BoraBora from "../imagenes/Bora-Bora.jpg";
import Escocia from "../imagenes/Escocia.jpg";
import Noruega from "../imagenes/Noruega.jpg";

function CardSlide() {
  return (
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
  );
}

export default CardSlide;
