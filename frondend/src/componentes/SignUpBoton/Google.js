import React from "react";
import GoogleLogin from 'react-google-login';


function Google(){

    const responseGoogle = (response) =>{
        console.log(response);
        
        const googleUser ={
                firstname: response.profileObj.firstname,
                lastname: response.profileObj.lastname,
                email: response.profileObj.email,
                password: response.googleId ,
                from:"Google",
              
        };
    //     await axios.post("https://mytinerary-jeanney.herokuapp.com/api/signup",{NuevoUsuario})
    //     .then(response=>
    //     displayMessages(response.data),
       
    //    )
    //    function displayMessages(data){
    //      if(data.success==="falseVAL"){
    //        console.log(data)
    //        console.log(data.response.error.details)
    //      alert(data.response.error.details.map(error=>error.message))
         
    //    } else if(data.success==="trueUE"){
    //       console.log(data)
    //      }
    //    }    

    }

    return(
        <div className="google mt-3">
          <GoogleLogin
          ClientId= "http://971845975096-d96pfrveho1431brgjcu4m4a2leibuei.apps.googleusercontent.com/"  //este link es del profesor lo podemos usar para testaer 
          buttonText = "Login"
          OnSuccess = {responseGoogle}
          onFailure = {responseGoogle}
          cookiePolicy = {'single_host_origin'}/>
          </div>
    );
}

export default Google;