import React from "react";
import "../style/style.css";
import { Facebook, Instagram, Twitter, Youtube, Pinterest, EnvelopeFill } from 'react-bootstrap-icons';

const Footer = () => {
    return (
        <div className="footer-container">
            <div>
                <h1>Company Info</h1>
                <div className="footer-sub-titles-container">
                    <div>About Us</div>
                    <div>Available Products</div>
                    <div>Git Repository</div>
                </div>
            </div>
            <div className="footer-sub-titles-container">
                <h1>Connect With Us</h1>
                <div className="footer-icon-container">
                    <Facebook />
                    <Instagram />
                    <Twitter />
                    <Youtube />
                    <Pinterest />
                    <EnvelopeFill />
                </div>
            </div>
            <div className="footer-sub-titles-container">
                <h1>Shopping Help</h1>
                <div>FAQ</div>
                <div>Help Desk</div>
                <div>Call Us: 1.833.253.2594</div>
            </div>
        </div>
    )
}

export default Footer;