import React from "react";

import Cancun from "../imagenes/Cancun.jpg";

function Itinerary(props) {
  const itinerarios = props.itineraries
  console.log(itinerarios)

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
                  Comments
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
          
          
        </div>
         
      </div>
      ))}
     
    </>
  );
}
export default Itinerary;
