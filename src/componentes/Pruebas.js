import React from "react";
import Avatar1 from "../ImagenFilter/CommentsImg/Avatar1.jpg";
import Avatar2 from "../ImagenFilter/CommentsImg/Avatar2.jpg";


function Comments(){

    return(
        /*Contenedor Principal*/
        <div className="bodyComments">
        <div className="comments-container">
            <h1>Comentarios </h1>
    
            <ul id="comments-list" className="comments-list">
                <li>
                    <div className="comment-main-level">
        {/*Avatar*/}
                        <div className="comment-avatar"><img src={Avatar1}/></div>
        {/*Contenedor del Comentario*/}
                        <div className="comment-box">
                            <div className="comment-head">
                                <h6 className="comment-name by-author"><a href="http://creaticode.com/blog">Agustin Ortiz</a></h6>
                                <span>hace 20 minutos</span>
                                <i className="fa fa-reply"></i>
                                <i className="fa fa-heart"></i>
                            </div>
                            <div className="comment-content">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit omnis animi et iure laudantium vitae, praesentium optio, sapiente distinctio illo?
                            </div>
                        </div>
                    </div>
        {/*-- Respuestas de los comentarios --*/}
                    <ul className="comments-list reply-list">
                        <li>
        {/*-- Avatar --*/}
                            <div className="comment-avatar"><img src={Avatar2} alt=""/></div>
        {/*-- Contenedor del Comentario --*/}
                            <div className="comment-box">
                                <div className="comment-head">
                                    <h6 className="comment-name"><a href="http://creaticode.com/blog">Lorena Rojero</a></h6>
                                    <span>hace 10 minutos</span>
                                    <i className="fa fa-reply"></i>
                                    <i className="fa fa-heart"></i>
                                </div>
                                <div className="comment-content">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit omnis animi et iure laudantium vitae, praesentium optio, sapiente distinctio illo?
                                </div>
                            </div>
                        </li>
    
                        <li>
        {/*-- Avatar --*/}
                            <div className="comment-avatar"><img src="http://i9.photobucket.com/albums/a88/creaticode/avatar_1_zps8e1c80cd.jpg" alt=""/></div>
        {/*-- Contenedor del Comentario --*/}
                            <div className="comment-box">
                                <div className="comment-head">
                                    <h6 className="comment-name by-author"><a href="http://creaticode.com/blog">Agustin Ortiz</a></h6>
                                    <span>hace 10 minutos</span>
                                    <i className="fa fa-reply"></i>
                                    <i className="fa fa-heart"></i>
                                </div>
                                <div className="comment-content">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit omnis animi et iure laudantium vitae, praesentium optio, sapiente distinctio illo?
                                </div>
                            </div>
                        </li>
                    </ul>
                </li>
    
                <li>
                    <div className="comment-main-level">
        {/*-- Avatar --*/}
                        <div className="comment-avatar"><img src="http://i9.photobucket.com/albums/a88/creaticode/avatar_2_zps7de12f8b.jpg" alt=""/></div>
        {/*-- Contenedor del Comentario --*/}
                        <div className="comment-box">
                            <div class="comment-head">
                                <h6 className="comment-name"><a href="http://creaticode.com/blog">Lorena Rojero</a></h6>
                                <span>hace 10 minutos</span>
                                <i className="fa fa-reply"></i>
                                <i className="fa fa-heart"></i>
                            </div>
                            <div className="comment-content">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit omnis animi et iure laudantium vitae, praesentium optio, sapiente distinctio illo?
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
       
    </div>
    );

}

export default Comments;





