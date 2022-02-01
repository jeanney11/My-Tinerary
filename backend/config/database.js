const mongoose = require("mongoose")

mongoose.connect(process.env.MONGO_URI,
    {useUnifiedTopology: true, 
        useNewUrlParser: true
    })

    .then(()=>console.log("Base de datos conectada"))
    .catch((error=>console.error(error)))