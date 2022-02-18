import React from "react";

import { useStateValue } from "../StateProvider";
import Itinerary from "./Itinerary";
import HeadCity from "./HeadCity";
import InfoCity from "./InfoCity";
import TitleCity from "./TitleCity";
import { useParams } from "react-router-dom";




function City(){
const [{cities,itineraries}, dispatch]=useStateValue()
const {id}=useParams()
const citySelecter = cities.filter(city=>city._id === id)
const itinerarySelecter= itineraries.filter(itin =>itin.city=== citySelecter[0].name)
//console.log(citySelecter)
    return(

        <div>

        <HeadCity citySelecter={citySelecter}/>
        <InfoCity citySelecter={citySelecter}/>
        <TitleCity/>
        <Itinerary itinerarySelecter={itinerarySelecter}/>    
        
        
        
       

        </div>

    );
}

export default City;