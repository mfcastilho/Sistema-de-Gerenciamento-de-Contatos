import React from "react";
import "./ContactEditInfosUserArea.css";



function ContactEditInfosUserArea(){

     return(
        <div className="user-edit-contact-container">
            
            <div className="user-contact-box">
            <h2>Editar contato</h2>
               <form className="user-contact-edit-form" action="">
                    <div className="wrapper-elements">
                        <label className="label-user-contact-infos-edit">Nome</label>
                        <input type="text" className="input-user-contact-infos-edit" placeholder="Nome" />
                    </div>
                    <div className="wrapper-elements">
                        <label className="label-user-contact-infos-edit">E-mail</label>
                        <input type="text" className="input-user-contact-infos-edit" placeholder="Telefone" />
                    </div>
                    <div className="wrapper-elements">
                        <label className="label-user-contact-infos-edit">Endereço</label>
                        <input type="text" className="input-user-contact-infos-edit" placeholder="Endereço" />
                    </div>
                    <button className="edit-button">Editar</button>
               </form>
            </div>
        </div>
     )
}

export default ContactEditInfosUserArea;