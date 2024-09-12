import React, { useState } from "react";

import './styles/cadastroUser.css'
import './styles/login.css'

import devImg from '../static/images/dev-img.png'
import InputComponent from "../components/input";


const createUser = () => {}

const CadastroUser = (props) => {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [area, setArea] = useState('')
    const [isGestor, setIsGestor] = useState(false)
    const [idGestor, setGestor] = useState(null)
    const [empresa, setEmpresa] = useState(null)

    return (
        <form onSubmit={createUser()} className="cadastro-container">
            <div>
                <img src={devImg} alt="logo do projeto" />
                <br />
                <h2>Cadastro de Usuários</h2>
            </div>
            <div className="inputs-session">
                <div className="inputs-row">
                    <InputComponent 
                        type="text"
                        labelText="Nome"
                        name="username-cadastro"
                        placeholder="Digite seu nome..."
                        value={username}
                        maxLength="50"
                        onChange={(e)=>setUsername(e.target.value)}
                        is_required={true}
                    />
                    <InputComponent 
                        type="email"
                        labelText="Email"
                        name="email-cadastro"
                        placeholder="Digite seu e-mail"
                        value={email}
                        maxLength="50"
                        onChange={(e)=>setEmail(e.target.value)}
                        is_required={true}
                    />
                </div>
            </div>
        </form>
    ) 
}

export default CadastroUser