import React from "react";
import Header from "../../components/header/header";
import './styles.css'

const RegisterProduct = () => {



    return(
        <div className="div">
            <Header></Header>
            <div className="principal">
                <div className="info">
                <h2>Informações Principais</h2>
                    <div className="box">
                        <label >Nome do Produto</label>
                        <input></input>
                    </div>
                    <div className="box">
                        <label >Estoque</label>
                        <input></input>
                    </div>
                    <div className="box">
                        <label >Preço</label>
                        <input></input>
                    </div>
                    <div className="box">
                        <label >Preço Promocional</label>
                        <input></input>
                    </div>
                </div>
                <div className="info">
                <h2>Informações Adicionais</h2>
                    <label >Imagem</label>
                <div id="description" className="box">
                    <label >Descrição</label>
                    <input id="description"></input>
                </div>

                </div>
            </div>
            <div className="actions">
                <div className="buttons">
                    <button>Voltar!</button>
                    <button>Limpar!</button>
                    <button>Cadastrar!</button>
                </div>
            </div>
        </div>
    )
}

export default RegisterProduct