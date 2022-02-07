import React from "react";


import SelvaNegra from "../imagenes/SelvaNegra.jpg";
import Iguazu from "../imagenes/FotoFiltro/Iguazu.jpg";
import logo4 from "../imagenes/logo4.jpg";


function HeadCity(){

    return(
 <div className="bodyCity">   
<div class="containerCity">
  <div class="row ">
    <div class="col-lg-12">
      <div>


        <div class="col-md-4">
          <div class="profile-card text-center">

            <img class="img-responsive" src={Iguazu}/>
            <div class="profile-info">

              <img class="profile-pic" src={logo4}/>

              <h2 class="hvr-underline-from-center">Cataratas de Iguazu<span>Argentina</span></h2>
              <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
             
            </div>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</div>
</div>

    );
}

export default HeadCity;


