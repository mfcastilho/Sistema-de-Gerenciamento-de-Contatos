import React from "react";
import { BrowserRouter , Routes, Route} from 'react-router-dom';
import {Home} from "./pages/Home";
import { Register } from "./pages/Register";
import HomeUserArea from "./components/homeUserArea/HomeUserArea";

export function RoutesApp(){
   return(
      <BrowserRouter>
         <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/cadastro" element={<Register/>} />
            <Route exact path="/area-do-cliente" element={<HomeUserArea/>} />
         </Routes>
      </BrowserRouter>
   )
}
    
