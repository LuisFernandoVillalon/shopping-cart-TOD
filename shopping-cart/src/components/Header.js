import React from "react";
import "../style/style.css"

const Header = () => {
    return (
        <div className="header-container">
            <div className="header-title">Virtual Yard Sale</div>
            <div className="header-buttons-container">
                <div>Home</div>
                <div>Products</div>
                <div>About</div>
                <div>Bag</div>
            </div>
        </div>
    )
}

export default Header;