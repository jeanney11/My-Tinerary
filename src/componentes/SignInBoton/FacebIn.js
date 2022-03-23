import React from 'react';
import axios from 'axios';
import FacebookLogin from 'react-facebook-login';
 

function FacebIn(){

const responseFacebook = async(response) => {
  console.log(response);


  const userData = {
    email: response.email,
    password: response.id + "Ab",
    from:"Facebook",
  };

  await axios.post("http://localhost:4000/api/signIn", { userData })
  .then(
    
      response=> //alert(response.data.response))
    
      // if(response.success==="falseVAL"){

      //  console.log(response.data)
      // }

      displayMessages(response.data),

      
      
  );
}

function displayMessages(data) {
  console.log(data)
  if (!data.success) {
    console.log(data.mensage)
   } else {
    console.log(data.response)
    console.log(data.mensage)
   }
  
   


}
 
return(
  <div className='google mt-3'>
      <FacebookLogin
    appId="1072441816821467"
    autoLoad={false}
    fields="name,email,picture"
    callback={responseFacebook} />


  </div>

);
}
export default FacebIn;