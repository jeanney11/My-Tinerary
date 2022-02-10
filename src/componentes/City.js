import React from "react";

import Itinerary from "./Itinerary";
import CityFilter from "./CityFilter";
import HeadCity from "./HeadCity";
import SlideItinerary from "./SlideItinerary";
import InfoCity from "./InfoCity";
import TitleCity from "./TitleCity";
import Pruebas from "./Pruebas";



function City(){

    return(

        <div>

        <HeadCity/>
        <InfoCity/>
        <TitleCity/>
        <Itinerary/>
        
        <Pruebas/>
       

        </div>

    );
}

export default City;