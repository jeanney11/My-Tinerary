import React from "react";
import Facebook from "../imagenes/Facebook.jpg";
import Whatsapp from "../imagenes/Whatsapp.jpg"
import Instagram from "../imagenes/Instagram.jpg"
import Twitter from "../imagenes/Twitter.jpg"

function Footer(){

    return(
        <footer className="page-footer">
          <div className="container-footer">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">MY ITINERARY</h5>
                <p className="grey-text text-lighten-4">Nos enorgullece anunciar que Royal Travel ha estado proporcionando los más altos estándares de varios tours y paquetes de viajes en el mundo durante 5 años.</p>
              </div>
              <div className="col l4 offset-l2 s12">
                <div className="links">
                <ul>
                  <li><a className="navbar-brand " href="https://es-la.facebook.com/">
          <img src={Facebook} alt="" width="40" height="40" />
        </a></li>
                  <li><a className="navbar-brand " href="https://web.whatsapp.com/">
          <img src={Whatsapp} alt="" width="70" height="40" />
        </a></li>
                  <li><a className="navbar-brand " href="https://z-p15.www.instagram.com/accounts/login/?next=/p/CK8SOUgBxgo/&hl=es-la">
          <img src={Instagram} alt="" width="45" height="45" />
        </a></li>
                  <li><a className="navbar-brand " href="https://twitter.com/iniciarsesion?lang=es">
          <img src={Twitter} alt="" width="40" height="40" />
        </a></li>
                </ul>
                </div>
              </div>
              <div className="col l6 s12">
                
                <h5 className="white-text">Datos de Contactos</h5>
                <p className="grey-text"> Dirección: Buenos Aires, Argentina</p>
                <p className="grey-text"> Telefono: 1154262729</p>
                <p className="grey-text">Email: MyTheneryRoyalTravel@gmail.com</p>
                <p className="grey-text">Sitio web: https://www.mytheneryroyaltravel.com/ar</p>
                <div className="links"></div> 
              </div>


            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
           Copyright 2022  ©  
            <a className="grey-text text-lighten-4 right" href="https://github.com/jeanney11/My-Tinerary.git">Jeanney Reyes</a>
            </div>
          </div>
        </footer>
    )
}
export default Footer;