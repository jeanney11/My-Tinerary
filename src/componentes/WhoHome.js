import React from "react";
import MaterialIcon, { colorPalette } from "material-icons-react";

import viajeros1 from "../imagenes/viajeros1.jpg";


function SlideHome() {
  return (
    <div className="card bg-dark text-white">
      <img src={viajeros1} class="Homeimg card-img" alt="..." />
      <div className="card-img-overlay">
        <h2 className="card-title">Why Royal Travel?</h2>
        
        <div className="Iconos">
        <MaterialIcon icon="stars" color="#E55D87" size="large" /></div>
        <h3> The Ultimate Experience</h3>
        <h5 className="Homecard-text">
        <p>For more than 5 years, assisting our guests with the maximum</p>
        <p>travel experience to many destinations around the world.</p></h5>
      
        <div className="Iconos">
        <MaterialIcon icon="attach_money" color="#E55D87" size="large" /></div>
        <h3> The Best Rates</h3>
        <h5 className="Homecard-text">
        <p>Our mission remains the same: to offer the best vacations</p>
        <p>at the best price, with personalized service for each traveler.</p></h5>
      
        <div className="Iconos">
        <MaterialIcon icon="thumb_up" color="#E55D87" size="large" /></div>
        <h3> Satisfaction guaranteed</h3>
        <h5 className="Homecard-text">
        <p>We focus our efforts on providing the best services </p>
        <p>to guarantee your total satisfaction.</p></h5>
      
      </div>

      
    
    </div>
  );
}
export default SlideHome;
