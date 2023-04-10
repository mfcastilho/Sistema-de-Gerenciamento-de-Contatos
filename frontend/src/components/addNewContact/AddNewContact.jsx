import React, {useEffect, useState} from "react";
import "./AddNewContact.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";



function AddNewContact(){

     const user = JSON.parse(localStorage.getItem("user"));
     const [name, setName] = useState("");
     const [email, setEmail] = useState("");
     const [tel, setTel] = useState("");

     

     const navigate = useNavigate(); 

     const baseURL = "http://localhost:5000";

     async function registerNewUserContact(e){
          e.preventDefault();

          const data = {
               name: name,
               tel: tel,
               email: email,
               userId: user.id
          }

          console.log(data);
          
          
               
          try {
               const res = await axios.post(`${baseURL}/api/v1/gerenciamento-contatos/contato/cadastro`, data);
               console.log(res.data.data);
               navigate("/area-do-cliente");

          } catch (error) {
               console.log(error.response.data.message);
          }
         
     }

     return(
        <div className="add-new-contact-container">
            
            <div className="add-new-contact-form-box">
            <h2 className="new-contact-page-title">Novo contato</h2>
               <form onSubmit={registerNewUserContact} className="add-new-contact-form" >
                    <div className="hugging-elements">
                         <label htmlFor="name" className="new-contact-label">Nome:</label>
                         <input type="text" className="new-contact-input" value={name} onChange={(e)=> setName(e.target.value)} name="name" />
                    </div>

                    <div className="hugging-elements">
                         <label htmlFor="tel" className="new-contact-label">Telefone:</label>
                         <input type="tel" className="new-contact-input" value={tel} onChange={(e)=> setTel(e.target.value)} name="tel" />
                    </div>

                    <div className="hugging-elements">
                         <label htmlFor="email" className="new-contact-label">Email:</label>
                         <input type="email" className="new-contact-input" value={email} onChange={(e)=> setEmail(e.target.value)} name="email" />
                    </div>

                    <input type="hidden" name="userId"/>

                    <button className="add-new-contact-btn">Cadastrar</button>     
               </form>
            </div>
        </div>
     )
}


export default AddNewContact;