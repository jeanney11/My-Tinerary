import React from "react";


import BoraBora from "../imagenes/Bora-Bora.jpg";
import CraigievarCastle from "../imagenes/CraigievarCastle.jpg"
import Escocia from "../imagenes/Escocia.jpg";
import Noruega from "../imagenes/Noruega.jpg";
import Cancun from "../imagenes/Cancun.jpg";
import Hakoya from "../imagenes/Hakoya.jpg";
import Orlando from "../imagenes/Orlando.jpg"
import SelvaNegra from "../imagenes/SelvaNegra.jpg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';



function carousel() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
  

    <div className="tour"> 
      <Carousel responsive={responsive} containerClass="text">
      

        <div className="containerCards m-3 ">
          <div className="cards">
            <div className="cards_body">
              <img src={BoraBora} className="cards_image"  />
              <h2 className="cards_title">Bora-Bora</h2>
              <p className="cards_description">It is a South Pacific island northwest of Tahiti in French Polynesia. Surrounded by islets and a turquoise lagoon protected by a coral reef.</p>
            </div>
            <button className="cards_btn"><a href="https://www.youtube.com/watch?v=r1lqRWqwg10">See More</a></button>
            <div className="cards_costo">
              <h2>4900$ 2 x person</h2>
              <h4>7 day / 6 night</h4>
            </div>
          </div>
        </div>

        <div className="containerCards m-3">
          <div className="cards">
            <div className="cards_body">
              <img src={CraigievarCastle} className="cards_image" />
              <h2 className="cards_title">Craigievar Castle</h2>
              <p className="cards_description">Craigievar Castle is a pink-fronted castle about 6 miles south of Alford, in the county of Aberdeenshire, Scotland.</p>
            </div>
            <button className="cards_btn"><a href="https://www.nts.org.uk/visit/places/craigievar">See More</a></button>
            <div className="cards_costo">
              <h2>600$ x 2 person</h2>
              <h4>1 day</h4>
            </div>
          </div>         
        </div>

        <div className="containerCards m-3">
          <div className="cards">
            <div className="cards_body">
              <img src={Hakoya} className="cards_image" />
              <h2 className="cards_title">Hakoya</h2>
              <p className="cards_description">The Hakoya 3.69 square kilometer Sandnessundet island located in the strait between the Tromsoya and Kvaloya islands in Troms County, Norway.</p>
            </div>
            <button className="cards_btn"><a href="https://www.shutterstock.com/es/search/hakoya">See More</a></button>
            <div className="cards_costo">
              <h2>1900$ x 2 persons</h2>
              <h4>4 day / 3 night</h4>
            </div>
          </div>         
        </div>

        <div className="containerCards m-3">
          <div className="cards">
            <div className="cards_body">
              <img src={Cancun} className="cards_image" />
              <h2 className="cards_title">Cancún</h2>
              <p className="cards_description">Cancun located in the Yucatan Peninsula, Mexico; bordered by the Caribbean Sea and is known for its beaches, resorts and nightlife.</p>
            </div>
            <button className="cards_btn"><a href="https://www.youtube.com/watch?v=cLx6HKhgRgc">See More</a></button>
            <div className="cards_costo">
              <h2>3900$ x 2 persons</h2>
              <h4>5 day / 4 night</h4>
            </div>
          </div>         
        </div>

        <div className="containerCards m-3">
          <div className="cards">
            <div className="cards_body">
              <img src={Orlando} className="cards_image" />
              <h2 className="cards_title">Orlando, Florida</h2>
              <p className="cards_description">Located in central Florida, it is home to more than a dozen theme parks offering fantastic entertainment for everyone.</p>
            </div>
            <button className="cards_btn"><a href="https://www.youtube.com/watch?v=fG0lSiYtPgI">See More</a></button>
            <div className="cards_costo">
              <h2>2900$ x 3 persons</h2>
              <h4>7 day / 6 night</h4>
            </div>
          </div>         
        </div>

        <div className="containerCards m-3">
          <div className="cards">
            <div className="cards_body">
              <img src={SelvaNegra} className="cards_image" />
              <h2 className="cards_title">Selva Negra</h2>
              <p className="cards_description">This German region is located next to the Rhine Valley and is characterized by its extensive fir and pine forests. </p>
            </div>
            <button className="cards_btn"><a href="https://www.viajandoporelmundomundial.com/pueblos-mas-bonitos-selva-negra/">See More</a></button>
            <div className="cards_costo">
              <h2>2300$ x 2 persons</h2>
              <h4>5 day / 4 night</h4>
            </div>
          </div>         
        </div>

       
        
    </Carousel>;
    </div>


  )
}

export default carousel;