import React from "react";
import idiomaInfo1 from '../imagenes/idiomaInfo.gif'
import worldInfo1 from '../imagenes/worldInfo1.gif'
import coinInfo from '../imagenes/coinInfo.gif'
import locationInfo from '../imagenes/locationInfo.gif'
import { blue } from "@material-ui/core/colors";




function InfoCity(props) {
  const city=props.citySelecter
  console.log(city)
  
    return (

      city.map(data=>
<div className="sec">
  
  <ul>
    <li><img src={worldInfo1} width={60}/>{/*  <i className="material-icons">travel_explore</i> */}
      <h3>Continents</h3>
      <p style={{color: "blue",}}>{data.continents} </p>
    </li>
    <li><img src={idiomaInfo1} width={75}/>{/* <i className="material-icons">connect_without_contact</i> */}
      <h3>Language</h3>
      <p style={{color: "blue",}}>{data.language} </p>  
    </li>
    <li><img src={coinInfo} width={70} />{/* <i className="material-icons">monetization_on</i> */}
      <h3 >Currency</h3>
      <p style={{color: "blue",}}>{data.currency} </p>
      </li>
      <li><img src={locationInfo} width={60}/>{/* <i className="material-icons">my_location</i> */}
      <h3>Ubication</h3>
      <p><a className="text-lighten-4 right" href={data.ubication}>GoogleMaps</a></p>
      </li>
  </ul>
</div>
      )
    );
}
export default InfoCity;