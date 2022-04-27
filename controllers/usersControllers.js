//require() para poder solicitar el archivo de estilos css, en el parentesiscolocar el nombre del archivo
const nodemailer =require("nodemailer")
const crypto = require("crypto")
const User = require ("../models/user.js")
const bcryptjs= require ("bcryptjs")
const {response}=require("express")
const jwt = require ("jsonwebtoken")

async function sendEmail(email,uniqueText){

    const transporter = nodemailer.createTransport({

        host:"smtp.gmail.com",
        port:465,
        secure:true,
        auth:{
            user:"claivelreyes@gmail.com",
            pass: "JeanlevLeandro02" 
        }
    })

    const sender="claivelreyes@gmail.com"   //correo de verificacion receptor
    const mailOptions={
        from: sender, 
        to: email,
        subject: "Verificacion de email de usuario",
        html:`Presiona <a href="http://localhost:4000/api/verify/${uniqueText}">Aqui</a>Para validar tu email`
    }
    await transporter.sendMail(mailOptions,function(error,response){
        if (error){
            console.log(error)
        } else{
            console.log("mensaje enviado")   //parametros para el usuario
        }
    })
}


const usersControllers = {

    verifyEmail:async(req,res)=>{//controlador que recibe el clip del email, y busca al usuario en la base
    const{uniqueText}=req.params  //toma el parametro de la clave
    //console.log(uniqueText)
    const user= await User.findOne({uniqueText:uniqueText})
    //console.log(user)
        if(user){
            user.emailVerificado=true
            await user.save()
            res.redirect("http://localhost:3000/SignIn")
        }else{
            res.json({success:false, response:"It has not been possible to verfy your email"})
        }
    },

    nuevoUsuario: async (req,res)=> {

        const {firstname, lastname, email, password, from}=req.body.NuevoUsuario;
        console.log(req.body)
        
        try{
            const UsuarioExiste= await User.findOne({email})


            if (UsuarioExiste){
                //res.json({success:false, response:"Usuario ya existe, realice el SignIn"})

                // if(google){
                //     UsuarioExiste.password = passwordHash
                //     UsuarioExiste.emailVerificado = true
                //     UsuarioExiste.google =true
                //     UsuarioExiste.connected = false
                    
                //     UsuarioExiste.save()
                //     res.json({success: true, from:"google", response:"Actualizamos tu SignUp para que los puedas realizar con Google"})
                // } else{
                //     res.json({response: false, from:"Signup",response: "Este email ya esta en uso"})

                // } 

                if (from !== "signup") {
                    const passwordHash = bcryptjs.hashSync(password,10)
                   UsuarioExiste.password = passwordHash
                   UsuarioExiste.emailVerificado = true
                   UsuarioExiste.from = from
                   UsuarioExiste.connected = false
                   UsuarioExiste.save()

                  return res.json({success:true, response:"Actualizar tu SignUp para que lo realices con " + from})
                } else{
                  return res.json({ success:false, response:"El nombre de usuario ya esta en uso"})
                }
            }
            
            else{
                const uniqueText=crypto.randomBytes(15).toString("hex")// genera un texto de 15 caracteres hexagesimal
                const emailVerificado = false
                const passwordHash = bcryptjs.hashSync(password,10)
                const NewUser = new User({
                    firstname, 
                    lastname,
                    email,
                    password: passwordHash,
                    uniqueText, //busca la coincidencia del texto,no se debe pasar el password
                    emailVerificado,
                    connected:false,
                    from,
                })


                if (from!=="signup"){
                    NewUser.emailVerificado = true
                    NewUser.from = from
                    NewUser.connected = false
                    await NewUser.save()
                    res.json({success:true, data:{NewUser}, response:"Felicitaciones se ha creado su usuario con " + from})
                } else {
                    NewUser.emailVerificado = false
                    NewUser.from = from
                    NewUser.connected = false
                    await NewUser.save()
                    await sendEmail(email,uniqueText)
                    res.json({success:"trueUE", response: "Se ha enviado un correo electronico para verificar su email", data:{NewUser}})
                }
                
                
                }
            

        }

        catch(error){res.json({success:"falseVAL", form:"singup", response:"El correo ya esta en uso",error:error})}
        
    
    },
    accesoUsuario: async(req,res) => {

        const {email,password} = req.body.userData

        try{
            const usuario= await User.findOne({email})

            if(!usuario){
                res.json({success:false,from:"controller",response:"el usuario y/o contraseña es incorrecta"})
            }
            else{
                if(usuario.emailVerificado){
                    let passwordCoincide = bcryptjs.compareSync(password,usuario.password)

                    if (passwordCoincide) {
                       

                        const datosUser = {
                            firstname: usuario.firstname,
                            lastname: usuario.lastname,
                            email:usuario.email,
                            id:usuario._id,
                        }
                        usuario.connected=true;
                        await usuario.save();
                        const token = jwt.sign({...datosUser}, process.env.SECRETKEY,{expiresIn:60*60*24})
                        res.json({success:true,from:"controller",data:{token,datosUser}, response:"Bienvenido"});
                        console.log(datosUser)
                    } 
                    
                    else{res.json({success:false,from:"controller",response:"el usuario y/o contraseña estan incorrectos"})}
                }
                else {res.json({success:false,from:"controller",response:"verifica tu e-mail para validacion"})}
            }
        }
        catch(error){console.log(error);res.json({success:false,response:null,error:error})}
        
     },

     cerrarSesion: async(req,res) => {
         const email = req.body.email
         //console.log(req.body.email)

         const user = await User.findOne({email})
        user.connected = false
         await user.save()
         res.json({success:true, response:"Sesion Cerrada"})

     },

     verificarToken: async(req, res)=>{
         //console.log(req)
         if(!req.error){
             res.json({success:true, 
                    data:
                    {firstname: req.user.firstname,
                    lastname: req.user.lastname,
                    email:req.user.email,
                    id:req.user.id},
                    response:"Bienvenido nuevamente" + req.user.firstname
               })
          } else{
              res.json({success:false,response:"por favor realizar nuevamente sign in"})
          }
     }
    
};
    module.exports = usersControllers;

