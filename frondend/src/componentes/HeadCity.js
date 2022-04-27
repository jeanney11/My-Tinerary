import React from "react";


import SelvaNegra from "../imagenes/SelvaNegra.jpg";
import Iguazu from "../imagenes/FotoFiltro/Iguazu.jpg";
import logo4 from "../imagenes/logo4.jpg";


function HeadCity(props){
  const city=props.citySelecter
  console.log(city)


    return(
      city.map(data=>
 <div className="bodyCity">   
<div className="containerCity">
  <div className="row ">
    <div className="col-lg-12">
      <div>


        <div className="col-md-4">
          <div className="profile-card text-center">

            <img className="img-responsive" src={process.env.PUBLIC_URL + `/ImagenFilter/CityImg/${data.img}`}/>
            <div className="profile-info">

              <img className="profile-pic" src={process.env.PUBLIC_URL + `/ImagenFilter/CityImg/${data.flag}`}/>

              <h2 className="hvr-underline-from-center">{data.name}<span>{data.country}</span></h2>
              <div>{data.description}</div>
             
            </div>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</div>
</div>
)

    );
}

export default HeadCity;


