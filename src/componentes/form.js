import React, { useState } from "react";


const Form = (props) => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [idade, setIdade] = useState("");
  const [valorConsulta, setValorConsulta] = useState("");

  const handleSubmit = (e) => {
   const usuario = {
    nome, email, cpf, idade, valorConsulta
   }
   
    e.preventDefault();
    props.setaddUsuario([...props.addUsuario,usuario])
  
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nome:</label>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>CPF:</label>
        <input
          type="text"
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
        />
      </div>
      <div>
        <label>Idade:</label>
        <input
          type="number"
          value={idade}
          onChange={(e) => setIdade(e.target.value)}
        />
      </div>
      <div>
        <label>Valor da Consulta:</label>
        <input
          type="number"
          value={valorConsulta}
          onChange={(e) => setValorConsulta(e.target.value)}
        />
      </div>
      <button type="submit">Enviar</button>
       </form>
       </div>

  );
};

export default Form;
