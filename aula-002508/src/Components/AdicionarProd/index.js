import React, { useState } from "react";
import "./styles.css";

const AdicionarProd = ({ onAdd }) => {
  const [texto, setTexto] = useState("");

  const enviar = (e) => { 
    e.preventDefault();
    if (texto.trim()) {;
      onAdd(texto);
      setTexto("");
    }
  }

  return (
    <form className="form" onSubmit={enviar}>
      <input 
        type="text" 
        value={texto} 
        onChange={(e) => setTexto(e.target.value)} 
        placeholder="Adicionar produto..." 
      />
      <button type="submit">Adicionar</button>
    </form>
  );

}
export default AdicionarProd;