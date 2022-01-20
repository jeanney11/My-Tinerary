import { ReactElement } from "react";
import React from "react";
import Escocia from "../imagenes/Escocia.jpg";
import likes from "../imagenes/likes.jpg";
import comentario from "../imagenes/comentario.jpg";
import like from "../imagenes/like.png";
import bottum from "../imagenes/bottum.png";

function CardsCity() {
  return (
    <div className="Filtro">
      <div className=" row row-cols-1 row-cols-md-3 g-4">
        <div className="colFilter">
          <div className="Cards h-100">
            <img src={Escocia} class="card-img-top" alt="..." />
            <div class="card-body">
            <div className="date">PAIS</div>
              <h5 className="cards-title">Ciudad</h5>
              
              <p className="cards-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
            <div className="card-statsCity">
            <div className="stat">
              <div className="type">
                <img src={like} width="40" height="40" color="..." alt="..."/>
              </div>
              <div className="value">14</div>
            </div>
            <div className="stat border">
            <img src={comentario} width="40" height="40" alt="..."/>
              <div className="value">5</div>
              
            </div>
            <div className="stat">
              <div className="type"><img src={bottum} width="40" height="40" alt="..."/></div>
            <div className="value">Read More</div>
            </div>
          </div>  
          </div>
        </div>
        
        <div className="colFilter">
          <div className="Cards h-100">
            <img src={Escocia} class="card-img-top" alt="..." />
            <div class="card-body">
            <div className="date">PAIS</div>
              <h5 className="cards-title">Ciudad</h5>
              
              <p className="cards-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
            <div className="card-statsCity">
            <div className="stat">
              <div className="type">
                <img src={like} width="40" height="40" color="..." alt="..."/>
              </div>
              <div className="value">14</div>
            </div>
            <div className="stat border">
            <img src={comentario} width="40" height="40" alt="..."/>
              <div className="value">5</div>
              
            </div>
            <div className="stat">
              <div className="type"><img src={bottum} width="40" height="40" alt="..."/></div>
            <div className="value">Read More</div>
            </div>
          </div>  
          </div>
        </div>

        <div className="colFilter">
          <div className="Cards h-100">
            <img src={Escocia} class="card-img-top" alt="..." />
            <div class="card-body">
            <div className="date">PAIS</div>
              <h5 className="cards-title">Ciudad</h5>
              
              <p className="cards-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
            <div className="card-statsCity">
            <div className="stat">
              <div className="type">
                <img src={like} width="40" height="40" color="..." alt="..."/>
              </div>
              <div className="value">14</div>
            </div>
            <div className="stat border">
            <img src={comentario} width="40" height="40" alt="..."/>
              <div className="value">5</div>
              
            </div>
            <div className="stat">
              <div className="type"><img src={bottum} width="40" height="40" alt="..."/></div>
            <div className="value">Read More</div>
            </div>
          </div>  
          </div>
        </div>

      </div>
    </div>

    
  );
}

export default CardsCity;
