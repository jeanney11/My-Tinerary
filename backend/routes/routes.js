const Router = require("express").Router();

const citiesController = require("../controllers/datosControlles")
const{ObtenerTodosLosDatos,ObtenerItinerarios}= citiesController   // destructuracion del controlador   

Router.route("/datos") // parte de la url de consulta
.get(ObtenerTodosLosDatos)
Router.route("/itinerary")
.get(ObtenerItinerarios)

module.exports = Router
