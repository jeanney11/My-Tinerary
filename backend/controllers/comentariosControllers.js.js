const nodemailer =require("nodemailer")
const crypto = require("crypto")
const User = require ("../models/user.js")
const bcryptjs= require ("bcryptjs")
const {response}=require("express")
const jwt = require ("jsonwebtoken")


const commentControllers={


cargarComentarios: async (req,res)=> {

    const {itinerario, mensage, user}=req.body.dataComments;
    console.log(req.body.dataComments)

}

}

module.exports= commentControllers;
