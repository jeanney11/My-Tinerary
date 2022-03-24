import React, { useState, useEffect } from "react";
import { useStateValue } from "../StateProvider";
//import { EventRounded, Input } from "@material-ui/icons";
import axios from "axios";




function Comments(props) {

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
      user: user.datosUser.id
    };
    //console.log(dataComents)

    await axios.post("http://localhost:4000/api/comments", { dataComents })
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
    console.log(comment)
    
    },[reload])

const borrarComentario=(id)=>{
  axios.delete(`http://localhost:4000/api/comments/${id}`)
      setReload(reload)
}

const handleChange=(event)=>{
  setCambio(event.target.value)
}


const modificar =(id)=>{
      
      console.log(id,cambio)
  let data= cambio
  axios.put(`http://localhost:4000/api/comments/${id}`, {data})
  .then(response =>console.log(response))
      setReload(reload)
      
} 


  return (
    <>
      {/* Contenedor Principal */}
      <div className="bodyComments">
        <div className="comments-container">
          {/* <h1>Comentarios </h1> */}
          {/* <ul id="comments-list" className="comments-list"> */}
            {/* <li> */}
               {comment?.map(itin =>  
              <div className="comment-main-level"> 
                {/*Avatar*/}
                <div className="comment-avatar"> 
                {/* img src={process.env.PUBLIC_URL + `/ImagenFilter/CommentsImg/${itin.img}`}/> */}
                </div> 
                    {/*Contenedor del Comentario*/}
                <div className="comment-box">
                  <div className="comment-head">
                    <h6 className="comment-name by-author"><p>{itin.user.firstname}</p></h6> 
                    <span>hace 20 minutos</span> 
                    <i className="fa fa-reply"></i>
                    <i className="fa fa-heart"></i>
                  </div>
                {/* aqui puedo meter el ternario para el ternario que autoriza los botones al usuario por comentario */}

                  <div className="comment-content">
                    <input onKeyUp={handleChange}defaultValue={itin.comment}></input>
                  </div>

                               
                </div>
                <button className="btn btn primary" onClick={()=>borrarComentario(itin._id)}>Borrar</button>

               <button className="btn btn primary"  onClick={()=>modificar(itin._id)} >Modificar</button> 

           </div>  


               )} 

                <div className="comment-content mb-3">
                    <form onSubmit={submitComent}>
                      <textarea name="textarea" placeholder="write us....." className="city-textarea"></textarea>
                      <div className="btn-comentario-form">
                        <button type="submit" className="btn btn-primary"> 
                        {" "}Send <i className="fa fa-paper-plane"></i>{" "}
                        </button>{" "}

                        <button className="btn brn primary">Borrar</button>
                        <button className="btn brn primary">Modificar</button>
                      </div>
                     
                    </form>

                    
                  </div>  


              {/* guardar desde aqui */}
              {/*-- Respuestas de los comentarios --*/}
              {/* <ul className="comments-list reply-list">
                <li>
                  {/*-- Avatar --*/}
                  {/* <div className="comment-avatar"><img src={Avatar2} alt=""/></div> */}
                  {/*-- Contenedor del Comentario --*/}
                  {/* <div className="comment-box">
                    <div className="comment-head">
                      <h6 className="comment-name">
                        <a href="http://creaticode.com/blog">Lorena Rojero</a>
                      </h6>
                      <span>hace 10 minutos</span>
                      <i className="fa fa-reply"></i>
                      <i className="fa fa-heart"></i>
                    </div>
                  </div>
                </li> */}

                {/* <li> */}
                  {/*-- Avatar --*/}
                  {/* <div className="comment-avatar">
                    <img
                      src="http://i9.photobucket.com/albums/a88/creaticode/avatar_1_zps8e1c80cd.jpg"
                      alt=""
                    />
                  </div>
                  {/*-- Contenedor del Comentario --*/}
                  {/* <div className="comment-box">
                    <div className="comment-head">
                      <h6 className="comment-name by-author">
                        <a href="http://creaticode.com/blog">Agustin Ortiz</a>
                      </h6> 
                      <span>hace 10 minutos</span>
                      <i className="fa fa-reply"></i> */}
                      {/* <i className="fa fa-heart"></i>
                    </div>
                  </div>
                </li>
              </ul>
            </li>

            <li>
              <div className="comment-main-level"> */} 
                {/*-- Avatar --*/}
                {/* <div className="comment-avatar">
                  <img
                    src="http://i9.photobucket.com/albums/a88/creaticode/avatar_2_zps7de12f8b.jpg"
                    alt=""
                  />
                </div> */}
                {/*-- Contenedor del Comentario --*/}
                {/* <div className="comment-box">
                  <div class="comment-head">
                    <h6 className="comment-name">
                      <a href="http://creaticode.com/blog">Lorena Rojero</a>
                    </h6>
                    <span>hace 10 minutos</span>
                    <i className="fa fa-reply"></i>
                    <i className="fa fa-heart"></i>
                  </div>
                  <div className="comment-content mb-3">
                    <form onSubmit={submitComent}>
                      <textarea
                        name="textarea"
                        placeholder="write us....."
                        className="city-textarea"
                      ></textarea>
                      <div className="btn-comentario-form">
                        <button type="submit" className="btn btn-primary"> */}
                          {/* {" "}
                          Send <i className="fa fa-paper-plane"></i>{" "}
                        </button>{" "}
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </li> */}
            {/* hasta aqui guardado */}


          {/* </ul> */}
        </div>
      </div>
    
      </>
    );
}
    
  


export default Comments;
