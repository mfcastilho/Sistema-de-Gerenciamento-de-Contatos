import React from "react";
import { useLocation } from "react-router-dom";
import "./AllContactsUserArea.css";


function AllContactsUserArea(){

     const location = useLocation();

     const contacts = location.state.contacts;

     console.log(contacts);
     

     return(
        <div>
            
            <table class="table">
                <thead class="thead-light">
                    <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Nome</th>
                    <th scope="col">Telefone</th>
                    <th scope="col">Email</th>
                    <th scope="col" class="col-2">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map((contact)=>{
                        return (<tr>
                            <th scope="row">{contact.id}</th>
                            <td>{contact.name}</td>
                            <td>{contact.tel}</td>
                            <td>{contact.email}</td>
                            <td class="buttons-table-box">
                                <a href="" type="button" class="btn btn-primary" target="_blank">Abrir</a>
                                <a href="" type="button" class="btn btn-success">Editar</a>
                                <form className="delete-button-form delete-btn-form" >
                                    <button class="btn btn-danger">Excluir</button>
                                </form>
                            </td>
                        </tr>)
                    })}
                    
                </tbody>
            </table>

        </div>
     )
}

export default AllContactsUserArea;