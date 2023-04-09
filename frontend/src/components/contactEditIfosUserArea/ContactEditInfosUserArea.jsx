import React, { useState } from "react";
import "./ContactEditInfosUserArea.css";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const baseURL = "http://localhost:5000";

function ContactEditInfosUserArea(){

    const location = useLocation();
    const contact = location.state.contact;
    const user = JSON.parse(localStorage.getItem("user"));
    const navigate = useNavigate();


    const [name, setName] = useState(contact.name);
    const [tel, setTel] = useState(contact.tel);
    const [email, setEmail] = useState(contact.email);

    async function updateUserContact(e){
        e.preventDefault();
        try {

            const data = {
                name: name,
                tel: tel,
                email: email,
            }

            const resp = await axios.put(`${baseURL}/api/v1/gerenciamento-contatos/contato/${contact.id}/editar`, data);
            console.log(resp.data.data);

            try {
                const response = await axios.get(`${baseURL}/api/v1/gerenciamento-contatos/${user.id}/contatos`);
                const contacts = response.data.data;

                navigate(`/area-do-cliente/${user.id}/contatos`, {state:{contacts}})
            } catch (error) {
                console.log(error);
            }
            

        } catch (error) {
            console.error(error.response.data.message);
        }
    }

     return(
        <div className="user-edit-contact-container">
            
            <div className="user-contact-box">
            <h2>Editar contato - {contact.name}</h2>
               <form onSubmit={updateUserContact} className="user-contact-edit-form">
                    <div className="wrapper-elements">
                        <label className="label-user-contact-infos-edit">Nome</label>
                        <input type="text" value={name} onChange={(e)=> setName(e.target.value)} className="input-user-contact-infos-edit" placeholder={contact.name} />
                    </div>
                    <div className="wrapper-elements">
                        <label className="label-user-contact-infos-edit">Telefone</label>
                        <input type="text" value={tel} onChange={(e)=> setTel(e.target.value)}  className="input-user-contact-infos-edit" placeholder={contact.tel}/>
                    </div>
                    <div className="wrapper-elements">
                        <label className="label-user-contact-infos-edit">E-mail</label>
                        <input type="text" value={email} onChange={(e)=> setEmail(e.target.value)} className="input-user-contact-infos-edit" placeholder={contact.email} />
                    </div>
                    
                    <button className="edit-button">Editar</button>
               </form>
            </div>
        </div>
     )
}

export default ContactEditInfosUserArea;