import React from "react";
import { useState, useEffect } from "react";

//import { EventRounded } from "@material-ui/icons";
import { InsertEmoticon } from "@material-ui/icons";
import { Link as LinkRouter } from "react-router-dom";
// import Comments from "./Comments";
//import { Collapse } from "bootstrap";



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
              <div className="cart-btn">
                <a href="#" title="Add To Cart">

                {/* <div className="btn-group" role="group">
      <button id="btnGroupDrop2" type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
     Comentarios
      </button>
    <div className="dropdown-menu" aria-labelledby="btnGroupDrop2"> */}
      {/* <a class="dropdown-item" href="#">Dropdown link</a> */}
      {/* <LinkRouter to="/comment"> */}
       
        {/* </LinkRouter> */}
      {/* <a class="dropdown-item" href="#">Dropdown link</a> */}
    {/* </div>
  </div>

             */}
                  
                </a>
              </div>
              
            </li>

            <li>
              
              <p>
                {itin.description}
              </p>
              <span>{itin.time}</span>
              
            </li>
          </ul>

          {/* <Comments itinerario={itin._id}/>  */}
          
        </div>
         
      </div>

      ))}
     
    </>
  );
}
export default Itinerary;
