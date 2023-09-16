import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Footer() {
const currentYear = new Date().getFullYear();

const footerStyle = {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '45vh',
    background: '#87CEEB',
    
};

const contentStyle = {
    flex: '1'
};

return (
    <div style={footerStyle}>
    <div style={contentStyle}>
        {/* Your content goes here */}
    </div>
    <footer>
        <div className="container">
        <div className="row">
            <div className="col">
            <h5>About Us</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet facilisis urna. Praesent ac gravida libero. Donec non hendrerit arcu.</p>
            </div>
            <div className="col">
            <h5>Contact Us</h5>
            <p>building 666 street 777 some place</p>
            <p>Email: sarah@your_mommy.com</p>
            <p>Phone: 1235444</p>
            </div>
            <div className="col">
            <h5>Follow Us</h5>
            <a href="#">Facebook</a><br/>
            <a href="#">Twitter</a><br/>
            <a href="#">Instagram</a><br/>
            </div>
        </div>
        <hr/>
        <p>© {currentYear} Your Company Name</p>
        </div>
    </footer>
    </div>
);
}

export default Footer;
