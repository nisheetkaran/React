import React from "react";
import ReactDOM from "react-dom/client";


const Header = () => {
    return (
        <div className="header">
            <div className="logocontainer">
                <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?size=large" alt="" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Card</li>
                </ul>  
            </div>         
        </div>
    )
}

const Applayout = () => {
    return <div className="app">
        // Header
        <Header></Header>
        //body
        //footer
    </div>
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout/>); 
