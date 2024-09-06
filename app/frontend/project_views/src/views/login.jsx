import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import './styles/login.css'
import devImg from '../static/images/dev-img.png'


const verifyUserCredential = (user, pwd) =>{
        console.log(user)
        console.log(pwd)
}

const Login = (props) => {

        let [userValue, setUserValue] = useState('')
        let [pwdValue, setPwdValue] = useState('')

        return (
                <form onSubmit={verifyUserCredential(userValue, pwdValue)}>
                        <div className="login-container">
                                
                                <div>
                                        <img src={devImg} alt="Logo do projeto" />
                                </div>
                                <div className="inputs-session">
                                        <div className="input-block">
                                                <label htmlFor="username-login">Usuário</label>
                                                <input type="text" name="username-login" id="user-login" placeholder="digite seu nome..." value={userValue} onChange={(e)=>setUserValue(e.target.value)} required/>
                                        </div>
                                        
                                        <br />
                                        <div className="input-block">
                                                <label htmlFor="password-login">Senha</label>
                                                <input type="password" name="password-login" id="pwd-login" placeholder="digite sua senha..." value={pwdValue} onChange={(e)=>setPwdValue(e.target.value)} required/>
                                        </div>
                                        
                                        
                                </div>
                                <div>
                                        <Link to="/cadastro-user">Não Possuo Cadastro</Link>
                                </div>
                                <div>
                                        <button type="submit">Entrar</button>
                                </div>
                        </div>
                        
                        
                </form>
        )
}

export default Login