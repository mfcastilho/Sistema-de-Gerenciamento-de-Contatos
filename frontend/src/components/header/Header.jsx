import React from "react";
import "./Header.css";



export function Header(props) {

     return(
          <header>
               <div className="logo-box">
                    <a href="/"><h1 className="logo">Contacts</h1></a>                   
               </div>
               <div className="profile">
                    {/* <a href="/"><img src=".\src\assets\profile.png" alt="profile-image" /></a>     */}
               </div>
          </header>
     )
}