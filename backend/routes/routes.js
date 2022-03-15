const Router = require("express").Router();
const { cargarComentarios } = require("../controllers/comentariosControllers.js");
const datosController = require("../controllers/datosControlles");
const{ObtenerTodosLosDatos,ObtenerItinerarios}= datosController   // destructuracion del controlador   
const usersControllers = require ("../controllers/usersControllers")
const {nuevoUsuario, verifyEmail, accesoUsuario,cerrarSesion} = usersControllers
const validator = require ("../controllers/validator")

Router.route("/datos") // parte de la url de consulta
.get(ObtenerTodosLosDatos)

Router.route("/itinerary/:city")
.get(ObtenerItinerarios)

Router.route("/signup")
.post(validator,nuevoUsuario)

Router.route("/verify/:uniqueText")
.get(verifyEmail)

Router.route("/signIn")
.post(accesoUsuario)

Router.route("/SignOut")
.post(cerrarSesion)

Router.route("/comment")
.post(cargarComentarios)

module.exports = Router
