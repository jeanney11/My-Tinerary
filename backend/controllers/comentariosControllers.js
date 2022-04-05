const nodemailer =require("nodemailer");
const crypto = require("crypto");
const Comments = require ("../models/comments");
const bcryptjs= require ("bcryptjs");
const {response}=require("express");
const jwt = require ("jsonwebtoken");
const Itinerary = require("../models/itinerary.js")


const commentControllers ={

cargarComentarios: async (req,res)=> {

    const {itinerario, mensage}=req.body.dataComents;
    const user = req.user._id  
    console.log(req.body)
     try{
        let newComentario = await Itinerary.findOneAndUpdate({_id:itinerario},{$push:{comments:{comment:mensage,userId:user,date:Date.now()}}},{new:true}).populate("comments.userId",{firstname:1})
        res.json({success:true, response:{newComentario},mensage:"Gracias por su comentario"})
    }catch(error){
         console.log (error)
     }
        
},
    // obtenerComentarios:async(req, res) =>{

    //     //console.log(req.body)
    //     let id =req.params.id;
       
    //     let comentario
    //  try{
    //      comentario = await Comments.find({itinerario:id}).populate("user")
    //  }catch(error){
    //      console.log (error)
    //  } res.json({success:true, response:{comentario}})

    // },


    borrarComentario: async(req,res) =>{

        let id =req.params.id;
        let comentario
     try{
         comentario = await Itinerary.findOneAndUpdate({"comments._id":id},{$pull:{comments:{_id:id}}},{new:true})
     }catch(error){
         console.log (error)
     } res.json({success:true, response:{comentario},mensage:"Haz eliminado tu comentario"})

    },

    modificarComentario: async(req,res) =>{
        
        let id =req.params.id;
       // console.log(req.body)
        let {comment}=req.body.data

        let comentario
     try{
         comentario = await Itinerary.findOneAndUpdate({"comments._id":id},{$set:{"comments.$.comment":comment,"comments.$.date":Date.now()}},{new:true})
     }catch(error){
         console.log (error)
     }
     res.json({success:true,response:{comentario},mensage:"se ha modificado su comentario"})


    }
}

module.exports= commentControllers;
