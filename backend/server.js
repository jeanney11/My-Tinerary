require("dotenv").config()
const express = require("express") //el require es el equivalente al import en react
const app = express()
require("./config/database")

app.use(express.json())

app.listen("4000",()=> console.log("Servidor inicializado en Puerto 4000"))
