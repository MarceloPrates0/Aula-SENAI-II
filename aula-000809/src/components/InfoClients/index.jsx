// src\components\InfoClients\index.jsx
import { useState } from 'react'
import './style.css'
import logo from '../../assets/images/image.png'

function InfoJogador() {
    const [jogador, setJogador] = useState('')
    const [numeroJog, setNumeroJog] = useState('')
    const [funcao, setFuncao] = useState('')

    const [listaTime, setListaTime] = useState([])

    function adicionarJogador(event) {
        event.preventDefault()
        setListaTime([...listaTime, {jogador, funcao, numeroJog }])
        setJogador('')
        setFuncao('')
        setNumeroJog('')
    }
    return (
        <>
            <div className='Info-time'>
                <img src={logo} alt="" />
                <h2>Cadastro seleção brasileira de Volei</h2>
                <form onSubmit={adicionarJogador}>
                    <div>
                        <label>Nome:</label>
                        <input type="text" 
                        value={jogador} 
                        onChange={(e) => setJogador(e.target.value)} required/>
                    </div>
                    <div>
                        <label>Função:</label>
                        <input type="text"
                        value={funcao}
                        onChange={(e) => setFuncao(e.target.value) }required/>
                    </div>
                    <div>
                        <label>Número:</label>
                        <input type="number" 
                        value={numeroJog} 
                        onChange={(e) => setNumeroJog(e.target.value)} required/>
                    </div>
                    <button type='submit'>Adicionar Jogador</button>
                </form>

                <hr />
                <h3>TIME</h3>
                <ul>
                    {listaTime.map((time, index) => (
                        <li key={index}>{time.jogador}-{time.funcao} | {time.numeroJog}</li>
                    ))}
                </ul>
            </div>
        </>
    )
}
export default InfoJogador