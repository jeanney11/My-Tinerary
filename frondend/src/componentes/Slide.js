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
import { AddComment } from "@material-ui/icons";







function Slide(props) {

  const [comment, setComment] = useState([])

  const [{ user }, dispatch] = useStateValue();

  const [reload, setReload] = useState()

  const [cambio, setCambio] = useState()

  const [newComment, setNewComment]= useState()

  
  
  const submitComent = async () => {
    
    //console.log(event.target[0].value)

    const token= localStorage.getItem("token")
    const dataComents = {
      itinerario: props.itinerario,
      mensage: newComment,
      // user: user.dataUser.id
    };
   
    await axios.post("https://mytinerary-jeanney.herokuapp.com/api/comments",{ dataComents },{
      headers:{
        'Authorization':'Bearer ' + token
      }
    })
      .then((response) => 
     setComment(response.data.response.newComentario))
     setReload(!reload)
    
    }
    
    useEffect(() => {
        let id= props.itinerario
        
        console.log(id)
        
        axios.get(`https://mytinerary-jeanney.herokuapp.com/api/itinerario/${id}`)
      .then(response =>{   
    setComment(response.data.response.itinerario.comments)
        
      console.log(comment)  
    })
   
    console.log(user)
console.log("prueba")
    },[reload])

const borrarComentario=(event)=>{
  const token= localStorage.getItem("token")
  const id= event.target.id
  console.log(event.target)
  axios.post(`https://mytinerary-jeanney.herokuapp.com/api/deletecomments/${id}`,{},{
    headers:{
      'Authorization':'Bearer ' + token
    }
  })
      setReload(!reload)
}




const modificarComentario =(event)=>{
  const id=event.target.id
      
      // console.log(id,cambio)
  let data= cambio
  axios.put(`https://mytinerary-jeanney.herokuapp.com/api/comments/${id}`, {data})
  .then(response =>console.log(response))
      setReload(!reload)
      
} 




  return (
    <div className="SlideComentario">
      <Accordion>
        <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
          <h3  style={{
        fontFamily: "'Qwitcher Grypen', cursive",
        color: "rgb(162, 72, 235)", fontSize:"2em"}}>Comments</h3>
        </AccordionSummary>

       
        <AccordionDetails>
          
         {comment.length>0 && comment?.map(item=>
         <>
         {item.userId._id === user?.id?
         <div>
           <div type="text" onInput={(event)=>setCambio(event.currentTarget.textContent)} contentEditable>
            {item.comment}
           </div>
           <button className="btn brn primary" id={item._id}onClick={borrarComentario}><MaterialIcon icon="delete" color="#004e92" size="medium"  id={item._id}/></button>
           <button className="btn brn primary" id={item._id} onClick={modificarComentario}> <MaterialIcon icon="mode" color="#004e92" size="medium"  id={item._id}/></button>
         </div>:
         <div>{item.comment}</div>
         }
         </>
         )}
          {user &&
          <div>
            <textarea name="textarea" onChange={(event)=>setNewComment(event.target.value)} placeholder="write us....." className="city-textarea" style={{ width: 600 }} ></textarea>
               
                <button type="button" onClick={submitComent} className="btn brn-primary"> 
                <MaterialIcon icon="send" color="#004e92" size="medium" /> </button>
          </div>
          
          }

    
        {/* {comment?.map(itin=>    
        <div className="acordion-box">
                 <div className="comentario-user-imag">
                   <img src={Avatar1} alt=" " width="60" height="60"></img> */}
                   {/* <p>{itin.user.firstname}</p> */}
                 {/* </div>
                 <div className="comentario-user-tex">
                   <p>{itin.comment}</p>
                 </div>

        </div>

          )}             

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

                    
                  </div>   */}
        </AccordionDetails>
        
      </Accordion>
    </div>

  
  );
}
export default Slide;
