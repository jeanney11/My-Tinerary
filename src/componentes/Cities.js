import React from "react";

import Carousel from "../componentes/Carousel";
import CardSlide from "./CardSlide";
import CardsCity from "../componentes/CardsCity";
import Search from "./Search";
import SignIn from "../componentes/SignIn";
import SignUp from "../componentes/signUp";

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
