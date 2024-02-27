import Filters from "./Filters";
import { Link, NavLink, useLocation } from "react-router-dom";
import Cart from "./Cart";
import Login from "/src/components/Login";
import React from "react";

const Header = () => {
    const location = useLocation();
    const isLoginPage = location.pathname === "/";
    if (isLoginPage){
        return null;
    }

    return (
        <div className="header">
            <img />
            <NavLink to="/home"><h3>Home</h3></NavLink>
            <NavLink to="/procards"><h3>Shopping</h3></NavLink>
            <NavLink to="/carts"><h3>Cart</h3></NavLink>
            <NavLink to="/"><h3>Login</h3></NavLink>
        </div>
    )
}
export default Header;