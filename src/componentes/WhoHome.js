import React from "react";
import MaterialIcon, { colorPalette } from "material-icons-react";

import viajeros1 from "../imagenes/viajeros1.jpg";


function SlideHome() {
  return (
    <div className="card bg-dark text-white">
      <img src={viajeros1} class="Homeimg card-img" alt="..." />
      <div className="card-img-overlay">
        <h2 className="card-title">¿Por qué Royal Travel?</h2>
        
        <div className="Iconos">
        <MaterialIcon icon="stars" color="#ff9800" size="large" /></div>
        <h3> La Máxima Experiencia</h3>
        <h5 className="Homecard-text">
        <p>Durante más 40 años, asistiendo a nuestros huéspedes con la máxima</p>
        <p>experiencia en viajes por Egipto y muchos destinos más alrededor del mundo.</p></h5>
      
        <div className="Iconos">
        <MaterialIcon icon="attach_money" color="#ff9800" size="large" /></div>
        <h3> Las Mejores Tarifas</h3>
        <h5 className="Homecard-text">
        <p>Nuestra misión sigue siendo la misma: ofrecer las mejores vacaciones</p>
        <p>al mejor precio, con un servicio personalizado para cada viajero.</p></h5>
      
        <div className="Iconos">
        <MaterialIcon icon="thumb_up" color="#ff9800" size="large" /></div>
        <h3> Satisfacción Garantizada</h3>
        <h5 className="Homecard-text">
        <p>Centramos nuestros esfuerzos en proporcionar los mejores servicios </p>
        <p>para garantizar su total satisfacción.</p></h5>
      
      </div>

      
    
    </div>
  );
}
export default SlideHome;
