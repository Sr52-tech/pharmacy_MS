import React from "react";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx"
import SignupForm from "./components/SignForm.jsx";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function Sign() {
    return (
        <Router>
            <>
                <Navbar />
                <br />
                <br />
                <SignupForm />
                <br />
                <br />
        
        <Footer />
            </>

        </Router>
    );
}

export default Sign;
