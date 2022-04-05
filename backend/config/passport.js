const passport=require ("passport")
const jwtStrategy=require("passport-jwt").Strategy
const extractJwt=require("passport-jwt").ExtractJwt

const User=require("../models/user")

module.exports= passport.use(new jwtStrategy({

    jwtFromRequest:extractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey:process.env.SECRETKEY

}, (jwt_payload, done)=>{
    console.log(jwt_payload)
   //console.log(process.env.SECRETKEY)
    User.findOne({_id:jwt_payload.id})
    .then(user=>{
        //console.log(error)
        if(user){
            console.log("if")
            return done(null, user)
        // } else if(error){
        //     console.log("else if")
        //     return done(error,false)
        } else{
            console.log("else")
            return done(null,false)
        }
    }) .catch(error=> {
        console.log("error")  
       return done(error,false)})
}))
