import React from "react";
import { BrowserRouter , Routes, Route} from 'react-router-dom';
import {Home} from "./pages/Home";
import { Register } from "./pages/Register";
import HomeUserArea from "./components/homeUserArea/HomeUserArea";
import AllContactsUserArea from "./components/allContactsUserArea/AllContactsUserArea";
import ContactInfosUserArea from "./components/contactInfosUserArea/ContactInfosUserArea";
import ContactEditInfosUserArea from "./components/contactEditIfosUserArea/ContactEditInfosUserArea";
import AddNewContact from "./components/addNewContact/AddNewContact";

const user = JSON.parse(localStorage.getItem("user"));

export function RoutesApp(){
   return(
      <BrowserRouter>
         <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/cadastro" element={<Register/>} />
            <Route exact path="/area-do-cliente" element={<HomeUserArea/>} />
            <Route exact path={`/area-do-cliente/${user.id}/contatos`}  element={<AllContactsUserArea/>} />
            <Route exact path={`/area-do-cliente/${user.id}/contato/:id`}  element={<ContactInfosUserArea/>} />
            <Route exact path={`/area-do-cliente/${user.id}/contato/editar`}  element={<ContactEditInfosUserArea/>} />
            <Route exact path={`/area-do-cliente/${user.id}/cadastrar-contato`}  element={<AddNewContact/>} />
         </Routes>
      </BrowserRouter>
   )
}
    
