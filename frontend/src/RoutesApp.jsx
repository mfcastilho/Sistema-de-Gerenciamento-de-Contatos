import React from "react";
import { BrowserRouter , Routes, Route} from 'react-router-dom';
import {Home} from "./pages/Home";
import { Register } from "./pages/Register";

export function RoutesApp(){
     return(
        <BrowserRouter>
            <Routes>
               <Route exact path="/" element={<Home/>} />
               <Route exact path="/cadastro" element={<Register/>} />
           </Routes>
        </BrowserRouter>
     )
}
    
