import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./HomeUserArea.css";


function HomeUserArea(){

     const [isAuthenticated, setIsAuthenticated] = useState(false);
     const [user, setUser] = useState("");
     const navigate = useNavigate();

     useEffect(()=>{
          const token = localStorage.getItem("token");
          const userData = JSON.parse(localStorage.getItem("user"));

          if(token && userData){
               setIsAuthenticated(true);
               setUser(userData);
          }else{
               navigate("/");
          }
     }, [navigate])


     return(
          <div className="home-user-area-container">
               <h2>Área do Cliente</h2>
               <div className="user-infos-container">
                    <div className="welcome">Seja bem vindo, {user.name}!</div>
               </div>
               <div className="buttons-user-area-container">
                    <button className="contact-buttons add-new-contact-button">Adicionar novo contato</button>
                    <button className="contact-buttons see-all-contacts-button">Ver todos os contatos</button>
               </div>
          </div>
     )
}


export default HomeUserArea;