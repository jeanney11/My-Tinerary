const Router = require("express").Router();
const datosController = require("../controllers/datosControlles")
const{ObtenerTodosLosDatos,ObtenerItinerarios}= datosController   // destructuracion del controlador   
const usersControllers = require ("../controllers/usersControllers")
const {nuevoUsuario} = usersControllers
const validator = require ("../controllers/validator")

Router.route("/datos") // parte de la url de consulta
.get(ObtenerTodosLosDatos)

Router.route("/itinerary/:city")
.get(ObtenerItinerarios)

Router.route("/signup")
.post(validator,nuevoUsuario)

module.exports = Router
