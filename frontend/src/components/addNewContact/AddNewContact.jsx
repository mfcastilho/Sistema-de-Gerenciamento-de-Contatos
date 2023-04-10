import React from "react";
import "./AddNewContact.css";



function AddNewContact(){

     return(
        <div className="add-new-contact-container">
            
            <div className="add-new-contact-form-box">
            <h2 className="new-contact-page-title">Novo contato</h2>
               <form className="add-new-contact-form" >
                    <div className="hugging-elements">
                         <label htmlFor="name" className="new-contact-label">Nome:</label>
                         <input type="text" className="new-contact-input" name="name" />
                    </div>

                    <div className="hugging-elements">
                         <label htmlFor="tel" className="new-contact-label">Telefone:</label>
                         <input type="tel" className="new-contact-input" name="tel" />
                    </div>

                    <div className="hugging-elements">
                         <label htmlFor="email" className="new-contact-label">Email:</label>
                         <input type="email" className="new-contact-input" name="email" />
                    </div>

                    <input type="hidden" name="userId"/>

                    <button className="add-new-contact-button">Cadastrar</button>     
               </form>
            </div>
        </div>
     )
}


export default AddNewContact;