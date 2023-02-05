import React, { useContext, useState } from "react";

import { GlobalContext, patients } from "./hooks/globalstate";

const TabelaFilter = () => {
 const  contextForm = useContext(GlobalContext);
 const { patients } = useContext(GlobalContext);
 const { deletePatiente } = useContext(GlobalContext);


 console.log(contextForm)     
 return (
  <div style={{ textAlign: "center", margin: "0 auto",
   marginTop:'190px'}}>
  <button style={{
    backgroundColor:'#F0F0F0',
    justifycontent: 'space-around',
    borderRadius: "10px", 
    margin: "0 auto"
    
  }}>
       <div style={{ }}>
      <table style={ {width:'55vw', height:'55vh'}}>
        <thead>
          
          <tr style={{ borderRight: "1px solid black", borderTop: "2px solid black",}}>
            <th style={{ borderTop: "2px solid black" }} >Nome</th>
            <th style={{ borderTop: "2px solid black" }} >Email</th>
            <th style={{ borderTop: "2px solid black" }} >CPF</th>
            <th style={{ borderTop: "2px solid black" }} >Idade</th>
            <th style={{ borderTop: "2px solid black" }}>Valor da Consulta</th>
           
          </tr>
        </thead>
        <tbody style={{  borderTop: "2px solid black",}}>
          { contextForm.patients.map((usuario, index,patients) => (
            <tr key={index}>
              <td style={{ borderRight: "1px solid black", borderTop: "2px solid black", }}>{usuario.name}</td>
              <td style={{ borderRight: "1px solid black", borderTop: "2px solid black",}}>{usuario.email}</td>
              <td style={{borderRight: "1px solid black", borderTop: "2x solid black",borderBottom:'2px solid black'}} >{usuario.cpf}</td>
              <td style={{ borderRight: "1px solid black", borderTop: "2px solid black",}} >{usuario.date}</td>
              <td style={{ borderRight: "1px solid black", borderTop: "2px solid black",}} >{usuario.price}</td>
              <td style={{ borderTop: "2px solid black",}} >{usuario.id}</td>
              <td>
              <button style={{
                  backgroundColor: "green", 
                }} >
                  Editar
                </button>
                <button onClick={() => deletePatiente(usuario.id)} style={{
                  backgroundColor: "red",
                }}>
                  Deletar
                </button>
 
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      </button>
      </div>
)}
export default TabelaFilter
