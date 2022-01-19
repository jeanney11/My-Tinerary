import React from "react";

import Carousel from "../componentes/Carousel";
import CardSlide from "./CardSlide";
import CardsCity from "../componentes/CardsCity"

import SignIn from "../componentes/SignIn";
import SignUp from "../componentes/signUp";



function Cities(){

    return(
         <div>
        <Carousel/>
    
    
        
        <CardsCity/>        
        
        </div>
    )
}

export default Cities;