const Router = require("express").Router();
const datosController = require("../controllers/datosControlles")
const{ObtenerTodosLosDatos,ObtenerItinerarios}= datosController   // destructuracion del controlador   

Router.route("/datos") // parte de la url de consulta
.get(ObtenerTodosLosDatos)

Router.route("/itinerary/:city")
.get(ObtenerItinerarios)

module.exports = Router
