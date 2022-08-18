import React from 'react'
import './navbar.css'
import { Link } from "react-router-dom";
import {BiSearch} from 'react-icons/bi'
const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar__logo">
                <Link to='/'>
                    <img src='/logo.png' alt="logo"/>
                </Link>
            </div>
            <div className="navbar__search-input">
                <form>
                    <input type="search" placeholder="search..."class/>
                    <BiSearch className="search-icon"/>
                </form>
            </div>
            <div className="navbar__cart">
                <span className="navbar__cart-count">
                    0
                </span>
                <span>My Cart</span>
            </div>
        </div>
    )
}

export default Navbar