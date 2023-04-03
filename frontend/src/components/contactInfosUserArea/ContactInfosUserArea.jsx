import React from "react";
import { useLocation } from "react-router-dom";
import "./ContactInfosUserArea.css";



function ContactInfosUserArea(){

     const user = JSON.parse(localStorage.getItem("user"));

     const location = useLocation();
     console.log(location.state.contact);
     const contact = location.state.contact;
     return(
          <div className="user-contact-container">
               <h2>Informações do contato de {user.name}</h2>
               <div className="contac-infos-box">
                    <div><strong>Nome: </strong><span>{contact.name}</span></div>
                    <div><strong>Telefone: </strong><span>{contact.tel}</span></div>
                    <div><strong>Email: </strong><span>{contact.email}</span></div>     
               </div>
          </div>
     )
}


export default ContactInfosUserArea;