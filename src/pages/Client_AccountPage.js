import React from "react";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx"
import Account from "./components/Account.jsx";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function AdminEmpList() {
    return (
        <Router>
            <>
                <Navbar />
                <br />
                <br />
                <div className="d-flex justify-content-center">
                    <Account />
                </div>
                <br />
                <br />
        
        <Footer />
            </>

        </Router>
    );
}

export default AdminEmpList;
