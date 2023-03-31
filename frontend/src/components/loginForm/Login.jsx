import React from "react";
import "./Login.css";



export function Login(){
     return(
          <div className="container">
               <div className="login-container">
                    <h2>Login</h2>
                    <form>
                         <input className="input-username" type="text" placeholder="Username" />
                         <input className="input-password" type="password" placeholder="Password" />
                         <button>Login</button>
                    </form>
                    <a className="register_link" href=""><p>Não tem uma conta? Clique aqui e cadastre-se</p></a>
               </div>
              
          </div>
          
     )
}