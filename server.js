require("dotenv").config()
require("./config/database")

const express = require("express") //el require es el equivalente al import en react, pero no en Node
const cors = require("cors")
const Router = require("./routes/routes")
const passport = require("passport")
const PORT = process.env.PORT || 4000
const HOST = process.env.HOST || "0.0.0.0" 
const path = require ("path")
const app = express()


/* middlewares*/  
// Son software o servicios intermedio usados por nuestra App para realizar determinadas funciones, por ejemplo, realizar las respuestas en formato JSON, usar los FormData, los datos de cabezera de varios formatos
app.use(express.json()); //tramo que pasa datos a una variable
app.use(cors())

app.use(passport.initialize())  //esto es un middlewares
app.use("/api",Router)

if (process.env.NODE_ENV === "production"){
    app.use(express.static("client/build"))
    app.get("*",(req,res)=>{
        res.sendFile(path.join(__dirname+"/client/build/index.html"))
    })
}

app.listen(PORT,HOST,()=> console.log("Servidor inicializado en Puerto "+ PORT))


