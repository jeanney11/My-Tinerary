const nodemailer =require("nodemailer");
const crypto = require("crypto");
const Comments = require ("../models/comments");
const bcryptjs= require ("bcryptjs");
const {response}=require("express");
const jwt = require ("jsonwebtoken");


const commentControllers ={

cargarComentarios: async (req,res)=> {

    const {itinerario, mensage, user}=req.body.dataComents;
    console.log(req.body.dataComents)

    new Comments({itinerario: itinerario,
                    user: user,
                    comment: mensage
                }).save()
    let comentario
     try{
         comentario = await Comments.find({itinerario:itinerario}).populate("user")
     }catch(error){
         console.log (error)
     } res.json({success:true, response:{comentario}})
        
},
    obtenerComentarios:async(req, res) =>{

        console.log(req.body)
        let id =req.params.id;
       
        let comentario
     try{
         comentario = await Comments.find({itinerario:id}).populate("user")
     }catch(error){
         console.log (error)
     } res.json({success:true, response:{comentario}})

    },


    borrarComentario: async(req,res) =>{
        let id =req.params.id;

        let comentario
     try{
         comentario = await Comments.findOneAndDelete({_id:id})
     }catch(error){
         console.log (error)
     } res.json({success:true, response:{comentario}})

    },

    modificarComentario: async(req,res) =>{
        let id =req.params.id;
        console.log(req.body)
        let newComents= {comment:req.body.data}

        let comentario
     try{
         comentario = await Comments.findOneAndUpdate({_id:id}, newComents)
     }catch(error){
         console.log (error)
     }
     res.json({success:true,response:{comentario},mensage:"se ha modificado su comentario"})


    }
}

module.exports= commentControllers;
