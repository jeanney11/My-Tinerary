import React from "react";
import { useState, useEffect } from "react";
import { useStateValue } from "../StateProvider";
import axios from 'axios';
//import { EventRounded } from "@material-ui/icons";
import { InsertEmoticon } from "@material-ui/icons";
import { Link as LinkRouter } from "react-router-dom";
//import Comments from "./Comments";
//import { Collapse } from "bootstrap";
import Slide from "../componentes/Slide";
import Likes from "../componentes/Likes";
import MaterialIcon, { colorPalette } from "material-icons-react";
import {useParams} from "react-router-dom"





function Itinerary(props) {
  const [itinerarios,setItinerarios] = useState()
  //const itinerarios = props.itineraries
  console.log(props)
  const [comment, setComment] = useState()
  const[likes, setLikes] = useState(true);  
  const [{user}, dispatch]=useStateValue()
  const{id}=useParams()
  const[reload, setReload]= useState(false)

  

  const likeDislike= async(id)=>{
    const token= localStorage.getItem("token")
    console.log(user)
    console.log(token)
    const response = await axios.post("http://localhost:4000/api/likesDislike",{id},{
        headers:{
          'Authorization':'Bearer ' + token
        }
      })
        console.log(response)
        //setItinerarios(response.data.response)
        setReload(!reload)
}
  useEffect(()=>{  axios.get(`http://localhost:4000/api/itinerary/${id}`)
  .then(
    response=>setItinerarios(response.data.response.itinerary)
  )

    console.log(likes)
  },[reload])
  
  

  return (
    <>
       {itinerarios?.map((itin)=>  
        
        
      <div className="Paseos">
        
        <div className="sp-card-3 m-4">
        
          
          <div className="card-title">{itin.name}</div>
          
          <ul className="product-details">
            <li className="product-img" height={200} width={500}>
              <img src={process.env.PUBLIC_URL + `/ImagenFilter/ItinerayImg/${itin.img1}`} />
            </li>

            <li className="product-description" height={200} width={500}>
              <img src={process.env.PUBLIC_URL + `/ImagenFilter/ItinerayImg/${itin.img2}`} />
            </li>
            
          </ul>
         
          <ul className="footer-Card">
         
            <li>
              <div className="buy-btn">
                <a href="#" title="Buy Now">
                 {itin.price} 
                </a>
                {/* <Likes likes={itin.likes} id={itin._id}/> */}
              </div>
              
          {/* <div className="btn brn primary"><MaterialIcon icon="favorite" color="#004e92" size="medium"/></div> */}
         
         
          <div className="like">
               <button className="btn btn-like" onClick={()=>likeDislike(itin._id)}><MaterialIcon icon="favorite" color="#004e92" size="medium"/></button> 
               <span>{itin.likes.length}</span>
            </div>
              
             
              
            </li>
            
            <li>
              
              <p>
                {itin.description}
              </p>
              
              <span>{itin.time}</span>
              
            </li>
            
            <Slide itinerario={itin._id}/>

          </ul>

           
           
        </div>
        
         
      </div>


      )}
     
    </>
  );
}
export default Itinerary;
