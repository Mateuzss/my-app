import React from 'react';

const Tabela = ({ data }) => {
 console.log(typeof data)
    return (
    
      <button style={{borderRadius: "8px", padding: "8px 16px"}}>
    <table>
      <thead>
        <tr>
          <th>Nome-</th>
          <th>Email-</th>
          <th>CPF-</th>
          <th>Idade-</th>
          <th>Valor-da-Consulta</th>
        </tr>
      </thead>
      <tbody>
        {data.map((usuario, index) => (
          <tr key={index}>
            <td style={{ borderLeft:'1px solid black' ,borderRight: "1px solid black", borderTop: "2px solid black",}} >{usuario.nome}</td>
            <td style={{ borderRight: "1px solid black", borderTop: "2px solid black",}} >{usuario.email}</td>
            <td style={{ borderRight: "1px solid black", borderTop: "2px solid black",}} >{usuario.cpf}</td>
            <td style={{ borderRight: "1px solid black", borderTop: "2px solid black",}} >{usuario.idade}</td>
            <td style={{ borderRight: "1px solid black", borderTop: "2px solid black",}} >{usuario.valorConsulta}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </button>
  );
};

export default Tabela;



