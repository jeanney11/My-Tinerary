import React from "react";

import Cancun from "../imagenes/Cancun.jpg";
import Bellagio2 from "../ImagenFilter/ItinerayImg/Bellagio2.jpg";
import Bellagio1 from "../ImagenFilter/ItinerayImg/Bellagio1.jpg";
import BurjAlArab1 from "../ImagenFilter/ItinerayImg/BurjAlArab1.jpg";
import BurjAlArab2 from "../ImagenFilter/ItinerayImg/BurjAlArab2.jpg";





function Itinerary() {

  
  
  return (
<div>
    <div className="Paseos">
    <div className="sp-card-3 m-4">
                            
                        <div className="card-title">Rijksmuseum</div>
                        
                        

                        <ul className="product-details">
                            <li className="product-img">
                                <img src={Bellagio2}/>                                
                            </li>

                            <li className="product-description">
                            <img src={Bellagio1}/>     
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

                    <div className="sp-card-3 m-4">
                            
                            <div className="card-title">Rijksmuseum</div>
                            
                            
    
                            <ul className="product-details">
                                <li className="product-img">
                                    <img src={BurjAlArab1}/>                                
                                </li>
    
                                <li className="product-description">
                                <img src={BurjAlArab2}/>     
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
                <div className="Paseos">

                    <div className="sp-card-3 m-4">
                            
                            <div className="card-title">Rijksmuseum</div>
                            
                            
    
                            <ul className="product-details">
                                <li className="product-img">
                                    <img src={Cancun}/>                                
                                </li>
    
                                <li className="product-description">
                                <img src={Cancun}/>     
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
                    </div>

  );
    }
  export default Itinerary;