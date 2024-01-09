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

const RestaurantCards = () => {
    return (
        <div className="cards">
            <div className="card">
                <div className="card-img">
                    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/nkj06c05iaqkfththgdn" alt="" />
                </div>
                <div className="card-body">
                    <div className="card-title">
                        <h3>Meghna Foods</h3>
                    </div>
                    <div className="card-text">
                        <p>Cuisines</p>
                        <p>4.4 Star</p>
                        <p>32 Minutes</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCards/>
                <RestaurantCards/>
                <RestaurantCards/>
                <RestaurantCards/>
                <RestaurantCards/>
                <RestaurantCards/>
                <RestaurantCards/>
                <RestaurantCards/>
                <RestaurantCards/>
                <RestaurantCards/>
                <RestaurantCards/>
                <RestaurantCards/>
                <RestaurantCards/>
                <RestaurantCards/>
                <RestaurantCards/>
            </div>
        </div>
    )
}


const Footer = () => {
    return (
        <div className="footer">
            <p>© 2024 Restaurant Finder. All rights reserved.</p>
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
root.render(<Applayout/>); 
