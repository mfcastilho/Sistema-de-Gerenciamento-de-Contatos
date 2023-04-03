import React from "react";
import "./RegisterForm.css";


export function RegisterForm() {
     return (
         <div className="container">
               <div className="register-container">
                    <h2>Cadastro</h2>
                    <form action="" className="register-form">
                         <div className="edit-form-group">
                              {/* <label>Name</label> */}
                              <input type="text" className="form-control" placeholder="Nome" />
                         </div>
                         <div className="edit-form-group">
                              {/* <label>Email</label> */}
                              <input type="email" className="edit-form-control" placeholder="Email" />
                         </div>
                         <div className="edit-form-group">
                              {/* <label>Password</label> */}
                              <input type="password" className="edit-form-control" placeholder="Senha" />
                         </div>
                         <div className="edit-form-group">
                              {/* <label>Confirm Password</label> */}
                              <input type="password" className="edit-form-control" placeholder="Confirmar Senha" />
                         </div>
                         <button type="submit" className="register-button">Cadastrar</button>
                    </form>
                    <a className="register_link" href="/"><p className="register-link-paragraph">Já tem conta? Clique aqui e faça login</p></a>
               </div>
             
         </div>
     )
}