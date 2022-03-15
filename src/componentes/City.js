import React, {useEffect, useState} from "react";

import { useStateValue } from "../StateProvider";
import Itinerary from "./Itinerary";
import HeadCity from "./HeadCity";
import InfoCity from "./InfoCity";
import TitleCity from "./TitleCity";
import { useParams } from "react-router-dom";
import { AddBoxOutlined } from "@material-ui/icons";
import axios from "axios";
import Comments from "./Comments";




function City(){

    const[itineraries,setItineraries] = useState([])

const [{cities}, dispatch]=useStateValue()

const {id}=useParams()

const citySelecter = cities.filter(city=>city._id === id)
//const itinerarySelecter= itineraries.filter(itin =>itin.city=== citySelecter[0].name)
//console.log(citySelecter)

useEffect(() => {
citySelecter.map(city=>
   
        axios.get(`http://localhost:4000/api/itinerary/${city.name}`)
        .then(response => setItineraries(response.data.response.itinerary)
    ))},[])
    return(

        <div>

        <HeadCity citySelecter={citySelecter}/>
        <InfoCity citySelecter={citySelecter}/>
        <TitleCity/>
        <Itinerary itineraries={itineraries}/>   
        <Comments/> 
        
        {/* itinerarySelecter={itinerarySelecter} */}
        
       

        </div>

    );
}

export default City;