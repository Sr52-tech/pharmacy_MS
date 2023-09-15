import React from "react";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx"
import LoginForm from "./components/LoginForm.jsx";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function AdEmpList() {
    return (
        <Router>
            <>
                <Navbar />
                <br />
                <br />
                <LoginForm />
                <br />
                <br />
        
        <Footer />
            </>

        </Router>
    );
}

export default AdEmpList;
