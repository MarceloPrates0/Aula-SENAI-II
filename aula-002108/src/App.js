import React, { useState } from 'react';
import './App.css';

function App() {
  const [item, setItem] = useState('')
  const [compra, setCompras] = useState(['Teste'])

  const adicionarCompra = () => {
    if (compra.includes(item)) {
      alert('Ítem já selecionado!');
      return;
    }
    setCompras([...compra, item]);
    setItem('');
  }

  return(
    <body>
      <div class='container' className='App'>
        <h1>Insira o que deseja adicionar na lista de compras</h1>
        <div id='container'>
          <input 
            type='text'
            value={item} 
            onChange={(e) => setItem(e.target.value)}
          />
          <button onClick={adicionarCompra}>Adicionar</button>
          </div>
        <hr />
        <h2>Lista de compras: </h2>
        <ol>
          {compra.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol> 

      </div>
    </body>
  )
}


export default App;
