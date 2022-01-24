import React from "react";

import Carousel from "../componentes/Carousel";

import CardsCity from "../componentes/CardsCity";
import Search from "./Search";
import SignIn from "../componentes/SignIn";
import SignUp from "../componentes/signUp";

import Itinerary from "../componentes/Itinerary";
import CityFilter from "../componentes/CityFilter";

function Cities() {
  return (
    <div>
      <Search />

      <CardsCity />
      <div class="header">
        <p>Aprovecha Nuestra Promoción</p>
      </div>
      
      <Carousel />
    

     

     
    </div>
  );
}

export default Cities;
