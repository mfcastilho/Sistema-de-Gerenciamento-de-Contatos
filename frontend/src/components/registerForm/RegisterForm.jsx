import React, { useState } from "react";
import "./RegisterForm.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";


export function RegisterForm() {

     const baseURL = "http://localhost:5000";

     const [name, setName] = useState("");
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
     const [confirmPassword, setConfirmPassword] = useState("");

     const navigate = useNavigate();

     async function registerUser(e){
          e.preventDefault();

          const data = {
               name: name,
               email: email,
               password: password,
               confirmPassword: confirmPassword
          }

          try {

               const response = await axios.post(`${baseURL}/api/v1/gerenciamento-contatos/cadastro`, data);
               console.log(response.data);
               navigate(`/`);
          } catch (error) {
               console.log(error.response.data.message);
          }
     }



     return (
         <div className="container">
               <div className="register-container">
                    <h2>Cadastro</h2>
                    <form onSubmit={registerUser} className="register-form">
                         <div className="edit-form-group">
                              {/* <label>Name</label> */}
                              <input type="text" className="edit-form-control" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nome" />
                         </div>
                         <div className="edit-form-group">
                              {/* <label>Email</label> */}
                              <input type="email" className="edit-form-control" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                         </div>
                         <div className="edit-form-group">
                              {/* <label>Password</label> */}
                              <input type="password" className="edit-form-control" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Senha" />
                         </div>
                         <div className="edit-form-group">
                              {/* <label>Confirm Password</label> */}
                              <input type="password" className="edit-form-control" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirmar Senha" />
                         </div>
                         <button className="register-button">Cadastrar</button>
                    </form>
                    <a className="register_link" href="/"><p className="register-link-paragraph">Já tem conta? Clique aqui e faça login</p></a>
               </div>
             
         </div>
     )
}