import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import './styles.css'

const Home = () => {

    return(
        <Fragment>
            <div className="boxInput">
                <div className="loginBox">
                    <h1>Login</h1>
                    <label >E-mail:</label>
                    <input placeholder="E-mail"></input>
                </div>
                <div className="loginBox">
                    <label >Password:</label>
                    <input placeholder="Password"></input>
                </div>
                <button to="/products">
                    <Link to="/products">Logar!</Link>
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
        </Fragment>
    )
}

export default Home