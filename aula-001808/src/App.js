import React, { useState } from 'react';
import './App.css';

function App() {
  const [user, setUser] = useState('');
  const [users, setUsers] = useState(['João', 'Maria', 'Pedro']);

  const adicionarUsuario = () => {
    if (users.includes(user)) {
      alert('Usuário já existe!');
      return;
    }
    setUsers([...users, user]);
    setUser('');
  }

  return(
    <div className='App'>
      <h1>Adicionar usuários</h1>
      <input 
        type='text' 
        value={user} 
        onChange={(e) => setUser(e.target.value)}
      />
      <button onClick={adicionarUsuario}>Adicionar</button>

      <hr />
      <h2>Lista de usuários</h2>
      <ol>
        {users.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ol> 
    </div>
  ) 

}

export default App;
