const Router = require("express").Router();
const citiesController = require("../controllers/datosControlles")
const{ObtenerTodosLosDatos}= citiesController   // destructuracion del controlador   

Router.route("/datos") // parte de la url de consulta
.get(ObtenerTodosLosDatos)

module.exports = Router
