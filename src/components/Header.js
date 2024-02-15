import Filters from "./Filters";
import { Link, NavLink } from "react-router-dom";
import Cart from "./Cart";
import Login from "/src/components/Login";
import React from "react";

const Header = () => {
    return (
        <div className="header">
            <img />
            <NavLink activeClassName='is-active' to="/home"><h3>Home</h3></NavLink>
            <Link><h3>About</h3></Link>
            <NavLink to="/procards"><h3>Shopping</h3></NavLink>
            <Link activeClassName='is-active' to="/"><h3>Login</h3></Link>
        </div>
    )
}
export default Header;