import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./AllContactsUserArea.css";
import axios from "axios";


function AllContactsUserArea(){

    const user = JSON.parse(localStorage.getItem("user"));
    const location = useLocation();
    const contacts = location.state.contacts;
    const navigate = useNavigate();

    const [userContact, setUserContact] = useState("");

    const baseURL = "http://localhost:5000";

    async function getContacInfos(e){
        e.preventDefault();
        const contactId = e.target.dataset.id;
    
        try {
            const resp = await axios.get(`${baseURL}/api/v1/gerenciamento-contatos/contato/${contactId}`);
            console.log(resp.data.data.name);
            const contact = resp.data.data;
            setUserContact(contact);
            
            navigate(`/area-do-cliente/${user.id}/contato/${contactId}`, {state: {contact}});
        } catch (error) {
            console.log(error.response.data.message);
        }
    }

    async function goToStoreContactInfosPage(e){
        e.preventDefault();
        const contactId = e.target.dataset.id;

        try {
            const resp = await axios.get(`${baseURL}/api/v1/gerenciamento-contatos/contato/${contactId}`);
            const contact = resp.data.data;
            setUserContact(contact);
            navigate(`/area-do-cliente/${user.id}/contato/editar`, {state: {contact}});
        } catch (error) {
            console.log(error.response.data.message);
        }
    }

    async function deleteUserContact(e){
        e.preventDefault();
        const contactId = e.target.dataset.id;

        try {
            const result = await Swal.fire({
                title: 'Deseja realmente excluir o contato?',
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: 'Sim',
                denyButtonText: `Não`,
            })
               
            if (result.isConfirmed) {
                const resp = await axios.delete(`${baseURL}/api/v1/gerenciamento-contatos/contato/${contactId}/excluir`);
                console.log(resp.data.message);    
                // Swal.fire('Contato excluído com sucesso!', '', 'success');
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Contato excluído com sucesso!',
                    showConfirmButton: false,
                    timer: 1500
                  })

                try {
                    const resp = await axios.get(`${baseURL}/api/v1/gerenciamento-contatos/${user.id}/contatos`);
                    const contacts = resp.data.data;
                    navigate(`/area-do-cliente/${user.id}/contatos`, {state: {contacts}});
                } catch (error) {
                    console.log(error.response.data.message);
                }

                // navigate(`/area-do-cliente`)
            } else if (result.isDenied) {
                Swal.fire('O contato não foi excluído', '', 'info')
            }
        } catch (error) {
            console.log(error.response.data.message);
        }
        
         
        
    }
     
    function backButton(){
        navigate(`/area-do-cliente`);
    }

     return(
        <div className="all-contacts-user-area-container">
            <h2>Todos os contatos de {user.name}</h2>
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
                                    <button href="" className="btn btn-success" data-id={contact.id} onClick={goToStoreContactInfosPage}>Editar</button>
                                </form>

                                <form>
                                    <button className="btn btn-danger" data-id={contact.id} onClick={deleteUserContact}>Excluir</button>
                                </form>

                            </td>
                        </tr>)
                    })}
                    
                </tbody>
            </table>
            <button className="back-button" onClick={backButton}>Voltar</button>        
        </div>
     )
}

export default AllContactsUserArea;