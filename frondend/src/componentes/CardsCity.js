
import React from "react";
import { Link as Linkrouter } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import comentario from "../imagenes/comentario.jpg";
import like from "../imagenes/like.png";
import bottum from "../imagenes/bottum.png";

function CardsCity() {
  const [{filterCity},dispatch]=useStateValue()
  //console.log(filterCity)

  return (
    <>
      {filterCity?.map((city) => (
        <div className="Cards w-20">
          <img
            src={process.env.PUBLIC_URL + `/ImagenFilter/CityImg/${city.img}`}
            className="card-img-top" height={200} width={500}
            alt="..."
          />
          <div className="card-body">
            <div className="date">{city.country}</div>
            <h5 className="cards-title">{city.name}</h5>

            <p className="cards-text">{city.description}</p>
          </div>
          <div className="card-statsCity">
            <div className="stat">
              <div className="type">
                <img src={like} width="40" height="40" color="..." alt="..." />
              </div>
              <div className="value">14</div>
            </div>
            <div className="stat border">
              <img src={comentario} width="40" height="40" alt="..." />
              <div className="value">5</div>
            </div>
            <div className="stat btn">
              <Linkrouter to={`/City/${city._id}`}>
                <div className="type">
                  <img src={bottum} width="40" height="40" alt="..." />
                </div>
              </Linkrouter>
              <div className="value">Read More</div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default CardsCity;
