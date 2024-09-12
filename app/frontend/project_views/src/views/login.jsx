import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import './styles/login.css'

import devImg from '../static/images/dev-img.png'
import InputComponent from "../components/input";


const verifyUserCredential = (user, pwd) =>{
        console.log(user)
        console.log(pwd)
}

const Login = (props) => {

        let [userValue, setUserValue] = useState('')
        let [pwdValue, setPwdValue] = useState('')

        return (
                <form onSubmit={verifyUserCredential(userValue, pwdValue)} className="login-container">
                        <div>
                                <img src={devImg} alt="Logo do projeto" />
                        </div>
                        <div className="inputs-session">
                                <InputComponent
                                        labelText="Usuário" 
                                        type="text"
                                        name="username-login"
                                        id="user-login"
                                        placeholder="digite seu nome..."
                                        value={userValue}
                                        maxLength={50}
                                        onChange={(e)=>setUserValue(e.target.value)}
                                        is_required={true}
                                />
                                
                                <br />

                                <InputComponent
                                                labelText="Senha" 
                                                type="password"
                                                name="password-login"
                                                id="pwd-login"
                                                placeholder="digite sua senha..."
                                                value={pwdValue} 
                                                maxLength={16}
                                                onChange={(e)=>setPwdValue(e.target.value)}
                                                is_required={true}
                                        />
                                
                                
                        </div>
                        <div>
                                <Link to="/cadastro-user">Não Possuo Cadastro</Link>
                        </div>
                        <div>
                                <button type="submit">Entrar</button>
                        </div>         
                </form>
        )
}

export default Login