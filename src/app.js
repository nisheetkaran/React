import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";


const Footer = () => {
    return (
        <div className="footer">
            <p>©Nisheet Karan. Made with love and efforts. </p>
        </div>
    );
}

// In your Applayout component:
const Applayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
            <Footer />
        </div>
    );
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout />); 
