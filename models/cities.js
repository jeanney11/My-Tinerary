const mongoose = require("mongoose")// va a almacenar los datos de las ciudades "cities"

const citiesSchema = new mongoose.Schema({

    name:{type:String, require:true},
     country:{type:String, require:true},
     description:{type:String, require:true},
     currency:{type:String, require:true},
     language:{type:String, require:true},
     continents:{type:String, require:true},
     ubication:{type:String, require:true},
     demonym:{type:String, require:true},
     duration:{type:String, require:true},
     img:{type:String, require:true},
     flag:{type:String, require:true},
})
const City = mongoose.model("cities",citiesSchema)

module.exports = City;