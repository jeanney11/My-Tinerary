const mongoose = require("mongoose")// va a almacenar los datos de las ciudades "itinerary"


const itinerarySchema = new mongoose.Schema({
    
        city:{type:String, require:true},
        name:{type:String, require:true},
        description:{type:String, require:true},
        price:{type:String, require:true},
        time:{type:String, require:true},
        img1:{type:String, require:true},
        img2:{type:String, require:true},
        

})

const Itinerary = mongoose.model("itineraries",itinerarySchema)

module.exports = Itinerary;