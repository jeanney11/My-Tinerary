import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./componentes/NavBar";
import Home from "./componentes/Home";
import Cities from "./componentes/Cities";
import Footer from "./componentes/Footer";

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={ <Home />}/>
        <Route path="/cities"  element= {<Cities />}/>
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
