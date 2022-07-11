import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { AuthContext } from "../../contexts/auth";
import './styles.css'

const LoginPage = () => {
    const {login} = useContext(AuthContext)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleLogin = async () => {
        login(email, password)
    }

    return(
        <div className="page">
            <div className="boxInput">
                <div className="loginBox">
                    <h1>Login</h1>
                    <label >E-mail:</label>
                    <input 
                        type="email"
                        name="email"
                        id="email"
                        value={email}
                        placeholder="E-mail"
                        onChange={(e) => setEmail(e.target.value)}
                        />
                </div>
                <div className="loginBox">
                    <label >Password:</label>
                    <input 
                        type="password"
                        name="password"
                        id="password"
                        value={password}
                        placeholder="Senha"
                        onChange={(e) => setPassword(e.target.value)}
                        />
                </div>
                <button onClick={handleLogin}> Logar!
                </button>
            </div>
            <div className="boxInput">
                <div className="loginBox">
                    <h1>Registrar</h1>
                    <label >E-mail:</label>
                    <input placeholder="E-mail"></input>
                </div>
                <div className="loginBox">
                    <label >Password:</label>
                    <input placeholder="Password"></input>
                    <input placeholder="Confirme Password"></input>
                </div>
                <button>Registrar!</button>
            </div>
        </div>
    )
}

export default LoginPage