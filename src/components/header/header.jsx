import React from "react";
import { Link } from "react-router-dom";
import './styles.css'

const Header = () => {


    return(
        <div className="lag">
            <Link to="/products">Home</Link>
            <label>Logo</label>
            <label>Visitante</label>
        </div>
    )
}

export default Header