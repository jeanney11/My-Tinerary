const Router = require("express").Router();
const datosController = require("../controllers/datosControlles");
const{ObtenerTodosLosDatos,ObtenerItinerarios,ObtenerUnItinerario,likeDislike}= datosController   // destructuracion del controlador   

const usersControllers = require ("../controllers/usersControllers")
const {nuevoUsuario, verifyEmail, accesoUsuario,cerrarSesion,verificarToken} = usersControllers

const commentControllers = require("../controllers/comentariosControllers");
const {cargarComentarios,borrarComentario,modificarComentario} = commentControllers

const passport=require("passport")
require ("../config/passport")
const validator = require ("../controllers/validator");
const { get } = require("mongoose");

Router.route("/datos") // parte de la url de consulta
.get(ObtenerTodosLosDatos)

Router.route("/itinerary/:city")
.get(ObtenerItinerarios)

Router.route("/itinerario/:id")
.get(ObtenerUnItinerario)

Router.route("/signup")
.post(validator,nuevoUsuario)

Router.route("/verify/:uniqueText")
.get(verifyEmail)

Router.route("/signIn")
.post(accesoUsuario)

Router.route("/SignOut")
.post(cerrarSesion)

Router.route("/comments")
.post(passport.authenticate("jwt", {session:false}),cargarComentarios)

Router.route("/deletecomments/:id")
.post(passport.authenticate("jwt", {session:false}),borrarComentario)
// .get(obtenerComentarios)
//.put(modificarComentario)

Router.route("/signInToken")
.get(passport.authenticate("jwt", {session:false}), verificarToken)


Router.route("/likesDislike")
.post(passport.authenticate("jwt", {session:false}),likeDislike)

module.exports = Router
