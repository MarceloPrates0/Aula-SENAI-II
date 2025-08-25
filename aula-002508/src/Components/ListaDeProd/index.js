import React from 'react';
import './styles.css';

const ListaDeProd = ({ itens = [] }) => {
  return (
    <ol className='lista-de-produtos'>
      {itens.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ol>
  );
}

export default ListaDeProd;