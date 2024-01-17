import { LOGO_URL } from "../utils/constants";
import {useState, useEffect } from "react";

const Header = () => {
    
    useEffect(() => {
        console.log("Header mounted");
    }, []);
    
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} alt="" />
            </div>
        <div className="nav-items">
        <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
            <button className="login">Login</button>
        </ul>
        </div>
    </div>
    )
};

export default Header;