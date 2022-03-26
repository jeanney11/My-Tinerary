import React, { useState, useEffect } from "react";
import { useStateValue } from "../StateProvider";
import axios from "axios";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
//import Typography from "@mui/material/Typography";
//import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TextareaAutosize from '@mui/base/TextareaAutosize';
import MaterialIcon, { colorPalette } from "material-icons-react";
import { FarBee } from "react-icons/fa";
import Avatar1 from "../imagenes/FotoFiltro/Avatar1.jpg"






function Slide(props) {

  const [comment, setComment] = useState()

  const [{ user }, dispatch] = useStateValue();

  const [reload, setReload] = useState()

  const [cambio, setCambio] = useState()

  const submitComent = async (event) => {
    event.preventDefault()
    //console.log(event.target[0].value)

    const dataComents = {
      itinerario: props.itinerario,
      mensage: event.target[0].value,
      user: user.data.datosUser.id
    };
   
    console.log(dataComents)

    await axios.post("http://localhost:4000/api/comments",{ dataComents })
      .then((response) => 
     setComment(response.data.response.comentario))
     setReload(!reload)
    
    }
    
    useEffect(() => {
        let id= props.itinerario
        
        axios.get(`http://localhost:4000/api/comments/${id}`)
      .then(response =>{   
     setComment(response.data.response.comentario)
        
    })
    //console.log(comment)
    
    },[reload])

const borrarComentario=(id)=>{
  axios.delete(`http://localhost:4000/api/comments/${id}`)
      setReload(!reload)
}

const handleChange=(event)=>{
  setCambio(event.target.value)
}


const modificar =(id)=>{
      
      console.log(id,cambio)
  let data= cambio
  axios.put(`http://localhost:4000/api/comments/${id}`, {data})
  .then(response =>console.log(response))
      setReload(!reload)
      
} 




  return (
    <div>
      <Accordion>
        <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
          <h3>Comments</h3>

         

          {/* {comment?.map(itin =>  
              <div className="comment-main-level"> 
                {/* Avatar */}
                {/* <div className="comment-avatar"> 
                <img src={Avatar1}/>
                </div> */}
                    {/*Contenedor del Comentario*/}
                {/* <div className="comment-box">
                  <div className="comment-head">
                    <h6 className="comment-name by-author"><p>{itin.user.firstname}</p></h6> 
                    <span>hace 20 minutos</span> 
                    <i className="fa fa-reply"></i>
                    <i className="fa fa-heart"></i>
                  </div> */}
                {/* aqui puedo meter el ternario para el ternario que autoriza los botones al usuario por comentario */}

                  {/* <div className="comment-content">
                    <input onKeyUp={handleChange}defaultValue={itin.comment}></input>
                  </div> */}

                               
                {/* </div>
                <button className="btn btn primary" onClick={()=>borrarComentario(itin._id)}>Borrar</button>

               <button className="btn btn primary"  onClick={()=>modificar(itin._id)} >Modificar</button> 

           </div>  


                )}  */}

        </AccordionSummary>
        <AccordionDetails>
        <div className="comment-content mb-3">
                    <form onSubmit={submitComent}>
                      <textarea name="textarea" placeholder="write us....." className="city-textarea" style={{ width: 600 }} ></textarea>
                      <div className="btn-comentario-form">
                        <button type="submit" className="btn brn-primary"> 
                        <MaterialIcon icon="send" color="#004e92" size="medium" /> </button>

                        <button className="btn brn primary"><MaterialIcon icon="delete" color="#004e92" size="medium" /></button>
                        <button className="btn brn primary"> <MaterialIcon icon="mode" color="#004e92" size="medium" /></button>
                      </div>
                     
                    </form>

                    
                  </div>  
        </AccordionDetails>
      </Accordion>
    </div>

    // <div id="carousel" className="carousel slide" data-bs-ride="carousel">
    //   <div className="carousel-indicators">
    //     <button
    //       type="button"
    //       data-bs-target="#carouselExampleIndicators"
    //       data-bs-slide-to="0"
    //       className="active"
    //       aria-current="true"
    //       aria-label="Slide 1"
    //     ></button>
    //     <button
    //       type="button"
    //       data-bs-target="#carouselExampleIndicators"
    //       data-bs-slide-to="1"
    //       aria-label="Slide 2"
    //     ></button>
    //     <button
    //       type="button"
    //       data-bs-target="#carouselExampleIndicators"
    //       data-bs-slide-to="2"
    //       aria-label="Slide 3"
    //     ></button>
    //   </div>
    //   <div className="carousel-inner">
    //     <div className="carousel-item active ">
    //       <img src={BoraBora} className="d-block m-auto center" alt="..." />
    //     </div>
    //     <div className="carousel-item">
    //       <img src={Escocia} className="d-block m-auto center" alt="..." />
    //     </div>
    //     <div className="carousel-item">
    //       <img src={Noruega} className="d-block m-auto center" alt="..." />
    //     </div>
    //   </div>
    //   <button
    //     className="carousel-control-prev"
    //     type="button"
    //     data-bs-target="#carouselExampleIndicators"
    //     data-bs-slide="prev"
    //   >
    //     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    //     <span className="visually-hidden">Previous</span>
    //   </button>
    //   <button
    //     className="carousel-control-next"
    //     type="button"
    //     data-bs-target="#carouselExampleIndicators"
    //     data-bs-slide="next"
    //   >
    //     <span className="carousel-control-next-icon" aria-hidden="true"></span>
    //     <span className="visually-hidden">Next</span>
    //   </button>
    // </div>
  );
}
export default Slide;
