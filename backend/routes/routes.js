const Router = require("express").Router();
// const passport=require ("../config/passport")
const datosController = require("../controllers/datosControlles");
const{ObtenerTodosLosDatos,ObtenerItinerarios}= datosController   // destructuracion del controlador   
const usersControllers = require ("../controllers/usersControllers")
const {nuevoUsuario, verifyEmail, accesoUsuario,cerrarSesion} = usersControllers
const validator = require ("../controllers/validator");
const commentControllers = require("../controllers/comentariosControllers");
const {cargarComentarios,obtenerComentarios,borrarComentario,modificarComentario,verificarToken} = commentControllers


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

Router.route("/comments/:id")
.get(obtenerComentarios)
.delete(borrarComentario)
.put(modificarComentario)

// Router.route("/signInToken")
// .get(passport.authenticate("jwt", {session:false}), verificarToken)

module.exports = Router
