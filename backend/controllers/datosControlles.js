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
        console.log(req.params)
        let itinerary;

        const city = req.params.city
        let error = null
        try {
            itinerary = await Itinerary.find({city:city})
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

    }
}

module.exports = datosController