import React, {useState} from 'react'
import { useStateValue } from "../StateProvider";
import Avatar1 from "../imagenes/FotoFiltro/Avatar1.jpg";

import MaterialIcon, { colorPalette } from "material-icons-react";
import axios from 'axios';


function Like(props){
    const [{user}, dispatch]=useStateValue()
  
    const[likes, setLikes] = useState();
    console.log(props)

    const likeDislike= async()=>{
        const token= localStorage.getItem("token")
        console.log(user)
        await axios(`https://mytinerary-jeanney.herokuapp.com/api/likesDislike/${props.id}`,{},{
            headers:{
              'Authorization':'Bearer ' + token
            }
          })
        .then (response=>
            setLikes(response.data.response))
            
    }
    const colorHearth=likes?.includes(user.dataUser.id)? "FavoritoBordeDelineado":"FavoritoDelineado" 
    

    return (

        <>
        
        <div className="content-usuario my-4 mx-auto">
            {/* <div className="avatar">
            <img src={Avatar1} alt="" width="60" height="60"></img>
            <p className="user">User</p>    
            </div> */}

            <div className="like">
               <button className="btn btn-like" onClick={likeDislike}><i className={colorHearth}></i></button> 
               <span> {likes?.length} </span>
            </div>

        </div>
        </>
    )
}
export default Like;

