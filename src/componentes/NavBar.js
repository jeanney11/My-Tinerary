import React from "react";
import MaterialIcon, { colorPalette } from "material-icons-react";
import { FarBee } from "react-icons/fa";
import logo4 from "../imagenes/logo4.jpg";
import Facebook from "../imagenes/Facebook.jpg";
import { Link as LinkRouter } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navegacion navbar navbar-light bg-light">
      <div className="col-4">
        <a className="navbar-brand " href="#">
          <img src={logo4} alt="" width="60" height="60" />My Itinerary
        </a>
      </div>
      <div className="col-6">
        <form className="container-fluid justify-content-center ">
          <LinkRouter to="/">
            <button
              className="btn btn-outline-variant-danger me-2"
              type="button"
            >
              HOME
            </button>
          </LinkRouter>
          <LinkRouter to="/cities">
          <button className="btn btn-outline-variant-danger me-2" type="button">
            CITIES
          </button>
          </LinkRouter>
        </form>
      </div>
      <div className="col-2">
        <a className="d-grid gap-2 d-md-flex justify-content-md" href="#">
          <div class="btn-group" role="group">
            <button
              id="btnGroupDrop1"
              type="button"
              class="btn btn-transparent dropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <MaterialIcon icon="person_pin" color="#004e92" size="large" />
            </button>

            <ul class="dropdown-menu" aria-labelledby="btnGroupDrop1">
              <li>
                <a class="dropdown-item" href="#">
                  SignUp
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  SignIn
                </a>
              </li>
            </ul>
          </div>
        </a>
      </div>
    </nav>
  );
}

export default NavBar;
