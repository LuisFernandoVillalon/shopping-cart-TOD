import React from "react";
import { BagFill } from 'react-bootstrap-icons';
import "../style/style.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
     const navigate = useNavigate();
    const changeRouteToHome = () => {
        navigate("/");
    }
    const changeRouteToProducts = () => {
        navigate("/products");
    }
    const changeRouteToBag = () => {
        navigate("/bag");
    }
    
    return (
        <div className="header-container">
            <div onClick={changeRouteToHome}className="header-title">Virtual Yard Sale</div>
            <div className="header-buttons-container">
                <div onClick={changeRouteToHome}>Home</div>
                <div onClick={changeRouteToProducts}>Products</div>
                <div>About</div>
                <div>
                    <BagFill onClick={changeRouteToBag}/>  
                </div>
            </div>
        </div>
    )
}

export default Header;