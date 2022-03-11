import React from 'react';
import axios from 'axios';
import FacebookLogin from 'react-facebook-login';
 

function Facebook(){

const responseFacebook = async(response) => {
  console.log(response);


  const NuevoUsuario = {
    firstname: response.name,
    lastname: "facebook",
    email: response.email,
    password: response.id + "Ab",
    from:"Facebook",
  };

  await axios.post("http://localhost:4000/api/signup", { NuevoUsuario }).then(
    (
      response //alert(response.data.response))
    ) =>
      // if(response.success==="falseVAL"){

      //  console.log(response.data)
      // }

      displayMessages(response.data)
  );
  function displayMessages(data) {
    if (data.success === "falseVAL") {
      console.log(data);
      console.log(data.response.error.details);
      alert(data.response.error.details.map((error) => error.message));
    } else if (data.success === true) {
      console.log(data)
    }
  }



}
 
return(
  <div className='google mt-3'>
      <FacebookLogin
    appId="1072441816821467"
    autoLoad={true}
    fields="name,email,picture"
    callback={responseFacebook} />


  </div>

);
}
export default Facebook;