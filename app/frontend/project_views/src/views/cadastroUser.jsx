import React, { useState } from "react";

import './styles/cadastroUser.css'
import './styles/login.css'

import devImg from '../static/images/dev-img.png'
import InputComponent from "../components/input";
import SelectBoxComponent from "../components/select";
import RadioInput from "../components/radioInput";


const createUser = () => {}

const CadastroUser = (props) => {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [area, setArea] = useState('')
    const [cargo, setCargo] = useState('N')
    const [idGestor, setGestor] = useState(null)
    const [empresa, setEmpresa] = useState(null)
    const [password, setPassword] = useState('')

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
                    
                    <SelectBoxComponent
                        label="Empresa"
                        name="empresa-funcionario"
                        onChange={(e)=>setEmpresa(e.target.value)}
                        required={true}
                        options={[{value: 1, label: "empresa 1"}, {value: 2, label: "empresa 2"}, {value: 3, label: "empresa 3"}]}
                    />

                    <SelectBoxComponent
                        label="Area"
                        name="area-funcionario"
                        onChange={(e)=>setArea(e.target.value)}
                        required={true}
                        options={[{value: 1, label: "area 1"}, {value: 2, label: "area 2"}, {value: 3, label: "area 3"}]}
                        style={{ gridColumn: "1 / 2", gridRow: "3" }}  
                    />
                </div>

                <div className="inputs-row">
                    <SelectBoxComponent
                        label="Cargo"
                        name="cargo-funcionario"
                        onChange={(e)=> setCargo(e.target.value)}
                        required={true}
                        options={[{value: 1, label: "ANALISTA JR"}, {value: 2, label: "ANALISTA PLENO"}, {value: 3, label: "ANALISTA SÊNIOR"}, {value: 4, label: "GESTOR"}]}
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
                    <InputComponent 
                        type="password"
                        labelText="Senha"
                        name="pwd-cadastro"
                        placeholder="Digite sua senha"
                        value={password}
                        maxLength="16"
                        onChange={(e)=>setPassword(e.target.value)}
                        is_required={true}
                    />
                </div>

                <div className="inputs-row">
                    {cargo === '4' ? 
                    <SelectBoxComponent
                        label="Gestor"
                        name="gestor-funcionario"
                        onChange={(e)=>setGestor(e.target.value)}
                        required={true}
                        options={[{value: 1, label: "Gestor 1"}, {value: 2, label: "Gestor 2"}, {value: 3, label: "Gestor 3"}]}
                    /> : <></>}
                </div>
                <button type="submit">Casdastrar-se</button>
            </div>
        </form>
    ) 
}

export default CadastroUser