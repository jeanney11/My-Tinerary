import React from "react";
import Citiescard from "./CitiesCard";
import Slide from "./Slide";
import Carousel from "./Carousel";
import WhoHome from "./WhoHome";
import CarruselNew from "./CarrouselNew";
import {Link as LinkRouter} from "react-router-dom";
import portadagif2 from "../imagenes/portadagif2.gif"
import logo from "../imagenes/logo.jpg";
import BoraBora from "../imagenes/Bora-Bora.jpg";
import lineaAvion1 from "../imagenes/lineaAvion1.png"
import portada3 from "../imagenes/portada3.jpg"

function Home() {
  return (
    <div>
      <div className="Titulo">
        <div className="video-container">
          {/* <img src={portada3} width="100%" height="400" alt="..." /> */}
          <img className="video1" src={portadagif2} width={1250} height={450}/>
          <h1 className="texto"> Royal Travel</h1>
        </div>
        <div><h2 className="textos"> "to Travel is to Live"</h2></div>
        </div>

        <div className="tittle_delinear">
        
        <div /* className="Descripcion" */>
          <h2 className="description_title">Top Cities</h2>
        </div>
        <div className="decoracion">
        
        </div>
        </div>

        <Citiescard />
        <WhoHome/>
    <CarruselNew/>

    

      
    </div>
  );
}
export default Home;
