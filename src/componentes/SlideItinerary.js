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



function SlideItinerary() {
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
      
    
      <div className="travel">
    <div className="sp-card-3 m-4">
                            
                        <div className="card-title">Rijksmuseum</div>
                        
                        

                        <ul className="product-details">
                            <li className="product-img">
                                <img src={BoraBora}/>                                
                            </li>

                            <li className="product-description">
                            <img src={BoraBora}/>     
                            </li>
                        </ul>
                        
                        
                        <ul className="footer-Card">
                            <li>
                                <div className="buy-btn"><a href="#" title="Buy Now">Price</a></div>
                                <div className="cart-btn"><a href="#" title="Add To Cart">Comments</a></div>
                            </li>

                            <li>
                                <p>
                                    This product comes with two years of warrenty. This camera is best suitable for personal and professional use.                        
                                </p>
                                <span>DAY 1</span>
                            </li>
                        </ul>                       
                        
                    </div>
                </div>

                <div className="travel">
    <div className="sp-card-3 m-4">
                            
                        <div className="card-title">Rijksmuseum</div>
                        
                        

                        <ul className="product-details">
                            <li className="product-img">
                                <img src={BoraBora}/>                                
                            </li>

                            <li className="product-description">
                            <img src={BoraBora}/>     
                            </li>
                        </ul>
                        
                        
                        <ul className="footer-Card">
                            <li>
                                <div className="buy-btn"><a href="#" title="Buy Now">Price</a></div>
                                <div className="cart-btn"><a href="#" title="Add To Cart">Comments</a></div>
                            </li>

                            <li>
                                <p>
                                    This product comes with two years of warrenty. This camera is best suitable for personal and professional use.                        
                                </p>
                                <span>DAY 1</span>
                            </li>
                        </ul>                       
                        
                    </div>
                </div>

                <div className="travel">
    <div className="sp-card-3 m-4">
                            
                        <div className="card-title">Rijksmuseum</div>
                        
                        

                        <ul className="product-details">
                            <li className="product-img">
                                <img src={BoraBora}/>                                
                            </li>

                            <li className="product-description">
                            <img src={BoraBora}/>     
                            </li>
                        </ul>
                        
                        
                        <ul className="footer-Card">
                            <li>
                                <div className="buy-btn"><a href="#" title="Buy Now">Price</a></div>
                                <div className="cart-btn"><a href="#" title="Add To Cart">Comments</a></div>
                            </li>

                            <li>
                                <p>
                                    This product comes with two years of warrenty. This camera is best suitable for personal and professional use.                        
                                </p>
                                <span>DAY 1</span>
                            </li>
                        </ul>                       
                        
                    </div>
                </div>
       
        
    </Carousel>;
    </div>


  )
}

export default SlideItinerary;