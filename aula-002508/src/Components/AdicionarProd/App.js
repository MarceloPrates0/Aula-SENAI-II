import React, {useState} from 'react';
import './App.css';

import AdicionarProd from './Components/AdicionarProd'; 
import ListaDeProd from './Components/ListaProd';

function App() {
 const [produtos, setProdutos] = useState(['Maçã', 'Banana', 'Laranja']);

 const adicionarProduto = (nome) => {
    const produto = nome.trim();
    if (produtos.includes(produto)) {
        alert('Produto já existe na lista!');
        return;
        }
    setProdutos([...produtos, produto]);        
 }
 
    return (
        <div className="App">
            <h1>Lista de Produtos</h1>
            <AdicionarProd onAdd={adicionarProduto} />
            <hr />
            <h2>Lista de Produtos:</h2>
            <ListaDeProd item={produtos} />
        </div>
    );
}
export default App;