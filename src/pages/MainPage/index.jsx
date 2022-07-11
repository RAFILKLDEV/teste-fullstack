import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/auth.jsx";
import { createRepository, destroyRepository, getRepositories } from "../../services/api.js";
import Nav from "./nav.jsx";
import Repositories from "./repositories.jsx";
import Search from "./search.jsx";
import "./styles.css"

const MainPage = () => {

    const { user, logout } = useContext(AuthContext)
    const [repositories, setRepositories] = useState([])
    const [loading, setLoading] = useState(true)
    const [loadingError, setLoadingError] = useState(false)

    const loadData = async (query = "") => {
        try {
            setLoading(true)
            const response = await getRepositories(user?.id, query)
            setRepositories(response.data)
            setLoading(false)
        } catch (err) {
            console.log(err)
            setLoadingError(true)
        }
    }

    useEffect(() => {
        (async () => await loadData())()
    }, [])

    const handleLogout = () => {
        logout()
    }

    const handleSearch = (query) => {
        loadData(query)
    }

    const handleDeleteRepo = async (repository) => {
        await destroyRepository(user?.id, repository._id)
        await loadData()
    }

    const handleNewRepo = async (url) => {
        try {
            await createRepository(user?.id, url)
            await loadData()

        } catch (err) {
            setLoadingError(true)
        }
    }

    if (loadingError) {
        return (
            <div className="loading">
                Erro ao Carregar os dados de repositório. <Link to="/login">Voltar</Link>
            </div>
        )
    }

    if (loading) {
        return (
            <div className="loading">
                Carregando...
            </div>
        )
    }

    return(
        <div id="main">
            <Nav onLogout={handleLogout}/>
            <Search OnSearch={handleSearch}/>
            <Repositories 
                repositories={repositories} 
                onDeleteRepo={handleDeleteRepo}
                onNewRepo={handleNewRepo} />      
        </div>
        )
}

export default MainPage