const { response } = require("express")
const Cities = require("../models/cities.js")
const Itinerary = require("../models/itinerary.js")



const datosController = {
    ObtenerTodosLosDatos:async(req,res) =>{
        let cities
        let error = null
        try {
            cities = await Cities.find()
            
        } catch (err) {
            error = err
            console.log(error);
            
        }
        
        res.json({
            response: error? "ERROR":{cities},
            success: error?false:true,
            error: error
        })

    }, //req= require ; res= response
     
    ObtenerItinerarios:async(req,res)=>{
        //console.log(req.params)
        let itinerary;
        let cityItin;

        const city = req.params.city
        let error = null
        try {
            cityItin = await  Cities.findOne({_id:city}) 
            itinerary = await Itinerary.find({city:cityItin.name})
            //console.log(itinerary)
        } catch (err){
            error = err
           // console.log(error)
        } 
        res.json({
            response:error?"ERROR":{itinerary},
            sucess:error?false:true,
            error:error
        })

    },

    ObtenerUnItinerario: async(req,res)=>{
        const id = req.params.id

        try{
            const itinerario= await Itinerary.findOne({_id:id}).populate("comments.userId",{firstname:1})
            console.log(itinerario)
            res.json({success:true,response:{itinerario}})
        }catch(error){console.log(error)}

    },

    likeDislike: async (req,res)=>{
        const id =req.body.id;
        const user= req.user._id;
        console.log(id)
        
        console.log(user)
       let itinerary


        try {
            itinerary = await Itinerary.findOne({_id:id})
            //console.log(itinerary)
            if(itinerary.likes.includes(user)){

                Itinerary.findOneAndUpdate({_id:id},{$pull:{likes:user}},{new:true})
                .then(response=>res.json({success:true, response:response}))
                .catch(error=>console.log(error))

            } else{
                Itinerary.findOneAndUpdate({_id:id},{$push:{likes:user}},{new:true}) 
                .then(response=>res.json({success:true, response:response}))
                .catch(error=>console.log(error))

            }


        } catch (err){
            error = err
            res.json({success:false, response:error})
           // console.log(error)
        } 
        
    }

}

module.exports = datosController