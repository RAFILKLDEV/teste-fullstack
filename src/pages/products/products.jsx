import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/header/header";
import './styles.css'

const Products = () => {


    return(
        <div className="products">
            <Header/>
            <div className="page">
                <div className="searchBar">
                    <input type={"search"}></input>
                    <button>Pesquisar</button>
                </div>
                <div className="list">
                    <h2>Listagem de Produtos</h2>
                    <div className="title">
                        <div>Nome do Produto</div>
                        <div>Preço</div>
                        <div>Preço Promoção</div>
                        <div>Estoque</div>
                        <div>Visivel</div>
                        <div>Ações</div>
                    </div>
                    <div className="title" >
                        <div>Nome do Produto</div>
                        <div>Preço</div>
                        <div>Preço Promoção</div>
                        <div>Estoque</div>
                        <div>Visivel</div>
                        <div>Ações</div>
                    </div>
                </div>
                <div className="newProduct">
                    <button>
                        <Link to="/registerProduct">Novo Produto</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Products