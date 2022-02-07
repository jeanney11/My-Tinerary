import React from "react";

import Itinerary from "./Itinerary";
import CityFilter from "./CityFilter";
import HeadCity from "./HeadCity";
import SlideItinerary from "./SlideItinerary";
import InfoCity from "./InfoCity";

function City(){

    return(

        <div>

        <HeadCity/>
        <InfoCity/>
        <Itinerary/>

       

        </div>

    );
}

export default City;