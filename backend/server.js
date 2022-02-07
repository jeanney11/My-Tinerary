require("dotenv").config()

const express = require("express") //el require es el equivalente al import en react, pero no en Node
const cors = require("cors")
const Router = require("./routes/routes")
const app = express()
require("./config/database")


app.use(express.json());
app.use(cors())
app.use("/api",Router)

app.listen("4000",()=> console.log("Servidor inicializado en Puerto 4000"))

