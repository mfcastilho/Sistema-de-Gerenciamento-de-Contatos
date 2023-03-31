import React from "react";
import "./RegisterForm.css";


export function RegisterForm() {
     return (
         <div className="container">
               <div className="register-container">
                    <h2>Cadastro</h2>
                    <form action="">
                         <div className="form-group">
                              {/* <label>Name</label> */}
                              <input type="text" className="form-control" placeholder="Nome" />
                         </div>
                         <div className="form-group">
                              {/* <label>Email</label> */}
                              <input type="email" className="form-control" placeholder="Email" />
                         </div>
                         <div className="form-group">
                              {/* <label>Password</label> */}
                              <input type="password" className="form-control" placeholder="Senha" />
                         </div>
                         <div className="form-group">
                              {/* <label>Confirm Password</label> */}
                              <input type="password" className="form-control" placeholder="Confirmar Senha" />
                         </div>
                         <button type="submit" className="btn btn-primary">Register</button>
                    </form>
                    <a className="register_link" href="/"><p>Já tem conta? Clique aqui e faça login</p></a>
               </div>
             
         </div>
     )
}