require("dotenv").config()

const express = require("express") //el require es el equivalente al import en react, pero no en Node
const cors = require("cors")
const Router = require("./routes/routes")
const passport = require("passport")

const app = express()
require("./config/database")

/* middlewares*/  
// Son software o servicios intermedio usados por nuestra App para realizar determinadas funciones, por ejemplo, realizar las respuestas en formato JSON, usar los FormData, los datos de cabezera de varios formatos
app.use(express.json()); //tramo que pasa datos a una variable
app.use(cors())

app.use(passport.initialize())  //esto es un middlewares
app.use("/api",Router)

app.listen("4000",()=> console.log("Servidor inicializado en Puerto 4000"))

