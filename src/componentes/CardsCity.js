import { ReactElement } from "react";
import React from "react";
import Escocia from "../imagenes/Escocia.jpg";
import likes from "../imagenes/likes.jpg";
import comentario from "../imagenes/comentario.jpg";
import like from "../imagenes/like.png";
import bottum from "../imagenes/bottum.png";
import Iguazu from "../imagenes/FotoFiltro/Iguazu.jpg";
import Ushuaia from "../imagenes/FotoFiltro/Ushuaia.jpg";
import Glaciar from "../imagenes/FotoFiltro/Glaciar.jpg";


function CardsCity() {
  return (
    <div className="Filtro">
      <div className=" row row-cols-1 row-cols-md-3 g-4">
        <div className="colFilter">
          <div className="Cards h-100">
            <img src={Iguazu} class="card-img-top" alt="..." />
            <div class="card-body">
            <div className="date">ARGENTINA</div>
              <h5 className="cards-title">Cataratas del Iguazú, Misiones</h5>
              
              <p className="cards-text">
              En la zona existen diversas especies de aves y también pueden observarse yacarés, tortugas, garzas y peces.
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
            <img src={Ushuaia} class="card-img-top" alt="..." />
            <div class="card-body">
            <div className="date">ARGENTINA</div>
              <h5 className="cards-title">Tierra del Fuego, Ushuaia</h5>
              
              <p className="cards-text">
              Ushuaia, considerada la puerta de la Antártida, es el lugar donde convergen los Océanos Atlántico y Pacífico.
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
            <img src={Glaciar} class="card-img-top" alt="..." />
            <div class="card-body">
            <div className="date">ARGENTINA</div>
              <h5 className="cards-title">Glaciar Perito Moreno, Patagonia</h5>
              
              <p className="cards-text">
              el Glaciar Perito Moreno resulta ser un increíble espectáculo, siendo parte del campo de hielo Patagónico Sur.
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
