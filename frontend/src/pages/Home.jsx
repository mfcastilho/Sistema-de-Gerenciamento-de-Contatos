import React from "react";
import { Header } from "../components/header/Header";
import { Login } from "../components/loginForm/Login";



export function Home(){
     return (
          <div>
               <Header />
               <Login />
          </div>
     )
}