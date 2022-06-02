import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/home/home";
import Products from "./pages/products/products";
import RegisterProduct from "./pages/registerProducts/registerProducts";

const AppRoutes = () => {

    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/products" element={<Products/>}/>
                <Route exact path="/registerProduct" element={<RegisterProduct/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes