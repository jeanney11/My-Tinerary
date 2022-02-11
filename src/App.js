import React, { useEffect } from "react";

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
  const pasoUnaPropiedad = "Ver ejemplo de props"
const data =[]
  async function test(){

  }
  useEffect(() => {
    axios.get("http://localhost:4000/api/datos")
  .then(response =>{
    
    data.push(...response.data.response.cities)
    console.log(data)
    console.log(response)
  })

  },[])
  

  
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={ <Home />}/>
        <Route path="/cities"  element= {<Cities data={data} otraProps = {pasoUnaPropiedad} />}/>
        <Route path="/SignUp" element= {<SignUp/>}/>
        <Route path="/SignIn" element={<SignIn/>}/>
        <Route path="/City" element ={<City/>}/>
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
