import { ReactElement } from "react";
import React from "react";
import Escocia from "../imagenes/Escocia.jpg";

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
              <div className="value">
                4<sup>Likes</sup>
              </div>
              <div className="type">read</div>
            </div>
            <div className="stat border">
              <div className="value">5123</div>
              <div className="type">views</div>
            </div>
            <div className="stat">
              <div className="value">32</div>
              <div className="type">comments</div>
            </div>
          </div>  
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img src={Escocia} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This card has supporting text below as a natural lead-in to
                additional content.
              </p>
            </div>
            <div class="card-footer">
              <small class="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img src={Escocia} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </p>
            </div>
            <div class="card-footer">
              <small class="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>

<div className="New">
        <div className="cardCity">
          <div className="card-imageCity"></div>
          <div className="card-textCity">
            <div className="date">4 days ago</div>
            <h2>Post One</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, Ducimus, repudiandae
              temporibus omnis illum maxime quod deserunt eligendi dolor
            </p>
          </div>
          <div className="card-statsCity">
            <div className="stat">
              <div className="value">
                4<sup>m</sup>
              </div>
              <div className="type">read</div>
            </div>
            <div classNAme="stat border">
              <div className="value">5123</div>
              <div className="type">views</div>
            </div>
            <div className="stat">
              <div className="value">32</div>
              <div className="type">comments</div>
            </div>
          </div>
        </div>

        <div className="cardCity">
          <div className="card-imageCity"></div>
          <div className="card-textCity">
            <div className="date">4 days ago</div>
            <h2>Post One</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, Ducimus, repudiandae
              temporibus omnis illum maxime quod deserunt eligendi dolor
            </p>
          </div>
          <div className="card-statsCity">
            <div className="stat">
              <div className="value">
                4<sup>m</sup>
              </div>
              <div className="type">read</div>
            </div>
            <div className="stat border">
              <div className="value">5123</div>
              <div className="type">views</div>
            </div>
            <div className="stat">
              <div className="value">32</div>
              <div className="type">comments</div>
            </div>
          </div>
        </div>

        <div className="cardCity">
          <div className="card-imageCity"></div>
          <div className="card-textCity">
            <div className="date">4 days ago</div>
            <h2>Post One</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, Ducimus, repudiandae
              temporibus omnis illum maxime quod deserunt eligendi dolor
            </p>
          </div>
        <div className="card-statsCity">
            <div className="stat">
              <div className="value">
                4<sup>m</sup>
              </div>
              <div className="type">read</div>
            </div>
            <div className="stat border">
              <div className="value">5123</div>
              <div className="type">views</div>
            </div>
            <div className="stat">
              <div className="value">32</div>
              <div className="type">comments</div>
            </div>
          </div>  
        </div>
        </div>
    


      </div>
    </div>

    
  );
}

export default CardsCity;
