import React from "react";
import { useState } from "react";

const Search = ({ OnClear, OnSearch }) => {

    const [query, setQuery] = useState("")

    const handleClear = () => {
        setQuery('')
        OnSearch('')
    }
    
    return (
        <div className="search">
            <label htmlFor="query">Pesquisar </label>
            <input 
            type="text" 
            name="query" 
            id="query"
            value={query}
            onChange={(e) => setQuery(e.target.value)}></input>
            <button onClick={handleClear}>Limpar</button>
            <button onClick={() => OnSearch(query)}>Procurar</button>
        </div> 
    )
}

export default Search