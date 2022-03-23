import React, { useEffect } from "react";

import { actionType } from "./reducer";
import { useStateValue } from "./StateProvider";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./componentes/NavBar";
import Home from "./componentes/Home";
import SignUp from "./componentes/signUp";
import SignIn from "./componentes/SignIn";
import Cities from "./componentes/Cities";
import Footer from "./componentes/Footer";
import City  from "./componentes/City";
import axios from "axios";



function App() {
  const [{cities, itineraries}, dispatch]=useStateValue()
  

  async function test(){

  }
  useEffect(() => {

    axios.get("http://localhost:4000/api/datos")
  .then(response =>{
    dispatch({
      type:actionType.CITIESDB,
      cities:response.data.response.cities
    })
    // axios.get("http://localhost:4000/api/itinerary")
    // .then(response => {
    //   dispatch({
    //      type:actionType.ITINERARIESDB,
    //      itineraries: response.data.response.itinerary
    //    })
    //    console.log(itineraries)
    //  });

     if(localStorage.getItem("token")!==null){
      const token= localStorage.getItem("token")
      const  user = axios.get("http://localhost:4000/api/signInToken",{
        headers:{
          "Authorization":"Bearer"+token
        }
      })
      if(user.data.success){

        dispatch({
          type:actionType.USER,
          user:user.data.response
        })
      } else{
        localStorage.removeItem("token")
      }

     }
    
    
  })


  },[])
  

  
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={ <Home />}/>
        <Route path="/cities"  element= {<Cities/>}/>
        <Route path="/SignUp" element= {<SignUp/>}/>
        <Route path="/SignIn" element={<SignIn/>}/>
        
        <Route path="/city/:id" element ={<City/>}/>
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
