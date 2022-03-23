import React from "react";



import Carousel from "../componentes/Carousel";

import CardsCity from "../componentes/CardsCity";
import Search from "./Search";
import Itinerary from "../componentes/Itinerary";
import CityFilter from "../componentes/CityFilter";
import HeadCities from "../componentes/HeadCities";

function Cities() {
  
  

  return (
    <div>





     
      <Search />

      <div className="Filtro">
        <div className=" row row-cols-1 row-cols-md-4 g-4">
          <CardsCity/>
        </div>
      </div>

      <div className="App">
        <div
          style={{
            textAlign: "center",
            fontFamily: "'Mochiy Pop P One', sans-serif",
            color: "white",
            marginTop: "60px",
          }}
        >
          <h2>Take Advantage of our Promotions</h2>
        </div>
      </div>

      <Carousel />
    </div>
  );
}

export default Cities;
