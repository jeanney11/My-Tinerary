import React from "react";
import { useState, useEffect } from "react";

//import { EventRounded } from "@material-ui/icons";
import { InsertEmoticon } from "@material-ui/icons";
import { Link as LinkRouter } from "react-router-dom";
//import Comments from "./Comments";
//import { Collapse } from "bootstrap";
import Slide from "../componentes/Slide";
import MaterialIcon, { colorPalette } from "material-icons-react";




function Itinerary(props) {
  const itinerarios = props.itineraries
  //console.log(itinerarios)
  const [comment, setComment] = useState()

  



  return (
    <>
       {itinerarios.map((itin)=>(        
      <div className="Paseos">
      
        <div className="sp-card-3 m-4">
        
          
          <div className="card-title">{itin.name}</div>
          
          <ul className="product-details">
            <li className="product-img" height={200} width={500}>
              <img src={process.env.PUBLIC_URL + `/ImagenFilter/ItinerayImg/${itin.img1}`} />
            </li>

            <li className="product-description" height={200} width={500}>
              <img src={process.env.PUBLIC_URL + `/ImagenFilter/ItinerayImg/${itin.img2}`} />
            </li>
          </ul>

          <ul className="footer-Card">
          
            <li>
              <div className="buy-btn">
                <a href="#" title="Buy Now">
                 {itin.price} 
                </a>
              </div>
              
          <div className="btn brn primary"><MaterialIcon icon="favorite" color="#004e92" size="medium"/>
                
                
              </div>
              
            </li>

            <li>
              
              <p>
                {itin.description}
              </p>
              <span>{itin.time}</span>
              
            </li>
            

            <Slide itinerario={itin._id}/>
          </ul>

            {/* <Slide itinerario={itin._id}/>   */}
           
        </div>
         
      </div>

      ))}
     
    </>
  );
}
export default Itinerary;
