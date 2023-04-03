import React, { useEffect, useState } from "react";
import "./Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const baserURL = "http://localhost:5000";

export function Login(){

          const [password, setPassword] = useState("");
          const [email, setEmail] = useState("");
          const [error, setError] = useState("");
          const navigate  = useNavigate();
          

          const handleSubmit = async (event) => {

               event.preventDefault();
               const data ={
                    email:email,
                    password:password
               }

               try {

                    const response = await axios.post(`${baserURL}/api/v1/gerenciamento-contatos/login`, data);
                    const {token, user} = response.data;

                    console.log(user);
                    console.log(token);

                    localStorage.setItem("token", token);
                    localStorage.setItem("user", JSON.stringify(user));

                    navigate(`/area-do-cliente`);


     
               } catch (error) {
                    console.log(error.response.data.message);
                    setError(error.response.data.message);
                    
               }


               
          }

          
     


     return(
          <div className="container">
               <div className="login-container">
                    <h2>Login</h2>
                    <form className="login-form" onSubmit={handleSubmit} >
                         <input className="login-input-email" name="email" type="text" placeholder="Email" value={email} onChange={(e)=> setEmail(e.target.value)} />
                         <input className="login-input-password" name="password" type="password" placeholder="Password" value={password} onChange={(e)=> setPassword(e.target.value)}/>
                         {error && <p className="error">{error}</p>}
                         <button className="login-button" type="submit" onClick={()=>{}}>Login</button>
                    </form>
                    <a className="register_link" href="/cadastro" ><p className="register-link-paragraph">Não tem uma conta? Clique aqui e cadastre-se</p></a>
               </div>
              
          </div>
          
     )
}