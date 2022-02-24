const Router = require("express").Router();
const datosController = require("../controllers/datosControlles")
const{ObtenerTodosLosDatos,ObtenerItinerarios}= datosController   // destructuracion del controlador   
const usersControllers = require ("../controllers/usersControllers")
const {nuevoUsuario} = usersControllers

Router.route("/datos") // parte de la url de consulta
.get(ObtenerTodosLosDatos)

Router.route("/itinerary/:city")
.get(ObtenerItinerarios)

Router.route("/signup")
.post(nuevoUsuario)

module.exports = Router
