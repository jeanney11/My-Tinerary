import React from "react";


import SelvaNegra from "../imagenes/SelvaNegra.jpg";
import Iguazu from "../imagenes/FotoFiltro/Iguazu.jpg";
import logo4 from "../imagenes/logo4.jpg";


function HeadCity(){

    return(
 <div className="bodyCity">   
<div className="containerCity">
  <div className="row ">
    <div className="col-lg-12">
      <div>


        <div className="col-md-4">
          <div className="profile-card text-center">

            <img className="img-responsive" src={Iguazu}/>
            <div className="profile-info">

              <img className="profile-pic" src={logo4}/>

              <h2 className="hvr-underline-from-center">Cataratas de Iguazu<span>Argentina</span></h2>
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


