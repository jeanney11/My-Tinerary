import React from "react";




function InfoCity(props) {
  const city=props.citySelecter
  console.log(city)
  
    return (

      city.map(data=>
<div className="sec">
  
  <ul>
    <li><i className="material-icons">travel_explore</i>
      <h3>Continents</h3>
      <p>{data.continents} </p>
    </li>
    <li><i className="material-icons">connect_without_contact</i>
      <h3>Language</h3>
      <p>{data.language} </p>  
    </li>
    <li><i className="material-icons">monetization_on</i>
      <h3>Currency</h3>
      <p>{data.currency} </p>
      </li>
      <li><i className="material-icons">my_location</i>
      <h3>Ubication</h3>
      <p><a className="text-lighten-4 right" href={data.ubication}>GoogleMaps</a></p>
      </li>
  </ul>
</div>
      )
    );
}
export default InfoCity;