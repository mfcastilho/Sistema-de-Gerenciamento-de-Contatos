import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./AllContactsUserArea.css";
import axios from "axios";


function AllContactsUserArea(){

    const user = JSON.parse(localStorage.getItem("user"));
    const location = useLocation();
    const contacts = location.state.contacts;
    const navigate = useNavigate();

    const baserURL = "http://localhost:5000";

    async function getContacInfos(e){
        e.preventDefault();
        const contactId = e.target.dataset.id;
    
        try {
            const resp = await axios.get(`${baserURL}/api/v1/gerenciamento-contatos/contato/${contactId}`);
            console.log(resp.data.data.name);
            const contact = resp.data.data
            navigate(`/area-do-cliente/${user.id}/contato/${contactId}`, {state: {contact}});
        } catch (error) {
            console.log(error.response.data.message);
        }
    }
     

     return(
        <div>
            
            <table className="table">
                <thead className="thead-light">
                    <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Nome</th>
                    <th scope="col">Telefone</th>
                    <th scope="col">Email</th>
                    <th scope="col" className="col-2">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map((contact)=>{
                        return (<tr key={contact.id}>
                            <th scope="row">{contact.id}</th>
                            <td>{contact.name}</td>
                            <td>{contact.tel}</td>
                            <td>{contact.email}</td>
                            <td className="buttons-table-box">
                               
                                <form >
                                    <button className="btn btn-primary" data-id={contact.id} onClick={getContacInfos}>Abrir</button>
                                </form>

                                <form>
                                    <button href="" className="btn btn-success" data-id={contact.id}>Editar</button>
                                </form>

                                <form>
                                    <button className="btn btn-danger" data-id={contact.id}>Excluir</button>
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