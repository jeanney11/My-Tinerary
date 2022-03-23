const passport=require ("passport")
const jwtStrategy=require(passport-"jwt").Strategy
const extractJwt=require("require-jwt").ExtractJwt

const User=require("../models/users")

module.exports= passport.use(new jwtStrategy({

    jwtFromRequest:extractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey:process.env.SECRETKEY

}, (jwt_payload, done)=>{
    User.findOne({_id:jwt_payload.id})
    .then(user=>{
        if(user){
            return done(null, user)
        } else if(error){
            return done(error,false)
        } else{
            return done(null,false)
        }
    }) .catch(error=>{return done(error,false)})
}))
