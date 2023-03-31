import React from "react";
import "./RegisterForm.css";


export function Register() {
     return (
         <div className="container">
               <div className="register-container">
                    <h1>Register</h1>
                    <form action="">
                         <div className="form-group">
                              <label>Name</label>
                              <input type="text" className="form-control" placeholder="Username" />
                         </div>
                         <div className="form-group">
                              <label>Email</label>
                              <input type="email" className="form-control" placeholder="Email" />
                         </div>
                         <div className="form-group">
                              <label>Password</label>
                              <input type="password" className="form-control" placeholder="Password" />
                         </div>
                         <div className="form-group">
                              <label>Confirm Password</label>
                              <input type="password" className="form-control" placeholder="Confirm Password" />
                         </div>
                         <button type="submit" className="btn btn-primary">Register</button>
                    </form>
               </div>
             
         </div>
     )
}