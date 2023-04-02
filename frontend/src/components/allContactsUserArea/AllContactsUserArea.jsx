import React from "react";
import { useLocation } from "react-router-dom";



function AllContactsUserArea(){

     const location = useLocation();

     const contacts = location.state.contacts;

     console.log(location.state.contacts.length);
     console.log(contacts);

     // location.state.contacts.forEach(contact=>{
     //      console.log(contact);
     // })

     return(
         <div>
             <ul>
                    <li>{contacts[0].name}</li>
             </ul>
         </div>
     )
}

export default AllContactsUserArea;