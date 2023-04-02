import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
import "./HomeUserArea.css";
import axios from "axios";

const baserURL = "http://localhost:5000";

function HomeUserArea(){

     const [isAuthenticated, setIsAuthenticated] = useState(false);
     const [user, setUser] = useState("");
     const navigate = useNavigate();

     useEffect(()=>{
          const token = localStorage.getItem("token");
          const userData = JSON.parse(localStorage.getItem("user"));

          if(token){
               const {exp} = jwtDecode(token);
               const currentDate = Date.now() / 1000;

               if(exp < currentDate){
                    navigate("/");
               }else{
                    // const {id, name, email} = jwtDecode(token);
                    setIsAuthenticated(true);
                    setUser(userData);
               }
          }else{
               navigate("/");
          }
     }, [navigate]);


     function goToNewContactForm(){
          navigate("/cadastrar-contato");
     }

     async function getAllUserContacts(e){

          e.preventDefault();
          try {

               const resp = await axios.get(`${baserURL}/api/v1/gerenciamento-contatos/${user.id}/contatos`);
               const contacts = resp.data.data;
               // console.log(contacts);
               navigate(`/area-do-cliente/${user.id}/contatos`, {state: {contacts}});             
               
          } catch (error) {
               console.log(error.response.data.message);
          }
     }



     return(
          <div className="home-user-area-container">
               <h2>Área do Cliente</h2>
               <div className="user-infos-container">
                    <div className="welcome">Seja bem vindo, {user.name}!</div>
               </div>
               <div className="buttons-user-area-container">
                    <form className="buttons-form"  onSubmit={goToNewContactForm} >
                         <button className="contact-buttons add-new-contact-button">Adicionar novo contato</button>
                    </form>

                    <form className="buttons-form" onSubmit={getAllUserContacts} >
                         <button className="contact-buttons see-all-contacts-button">Ver todos os contatos</button>
                    </form>
                    
               </div>
          </div>
     )
}


export default HomeUserArea;